import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down past hero
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOrder = () => {
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
          <div className="bg-primary/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl flex items-center justify-between">
            <div>
              <p className="text-white/60 text-xs font-semibold">السعر يبدأ من</p>
              <p className="text-white font-black text-lg">899 درهم</p>
            </div>
            <button 
              onClick={scrollToOrder}
              className="bg-accent text-primary font-bold px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 active:scale-95 transition-transform"
            >
              <ShoppingCart size={18} />
              اطلب الآن
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
