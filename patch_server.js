const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');
content = content.replace(
  /const ordersPath = path.join\(process\.cwd\(\), 'data', 'orders\.json'\);/,
  `const dataDir = path.join(process.cwd(), 'data');\n      await fs.mkdir(dataDir, { recursive: true });\n      const ordersPath = path.join(dataDir, 'orders.json');`
);
fs.writeFileSync('server.ts', content);
