/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import StickyBar from './components/StickyBar';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [orderData, setOrderData] = useState<any>(null);

  const handleOrderSuccess = (data: any) => {
    setOrderData(data);
  };

  return (
    <div className="font-sans">
      {orderData ? (
        <ThankYouPage orderData={orderData} />
      ) : (
        <>
          <LandingPage onSuccess={handleOrderSuccess} />
          <StickyBar />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}
