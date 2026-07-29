import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/orders', async (req, res) => {
    try {
      const order = { ...req.body, id: Date.now().toString(), createdAt: new Date().toISOString() };
      
      // Save locally to data/orders.json
      const ordersPath = path.join(process.cwd(), 'data', 'orders.json');
      let orders = [];
      try {
        const data = await fs.readFile(ordersPath, 'utf-8');
        orders = JSON.parse(data);
      } catch (err) {
        // File might not exist yet, that's fine
      }
      
      orders.push(order);
      await fs.writeFile(ordersPath, JSON.stringify(orders, null, 2));

      // Post to Google Sheets webhook if configured
      const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
          });
        } catch (webhookErr) {
          console.error('Failed to post to webhook:', webhookErr);
          // Continue, as local save was successful
        }
      }

      res.status(201).json({ success: true, orderId: order.id });
    } catch (err) {
      console.error('Error processing order:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
