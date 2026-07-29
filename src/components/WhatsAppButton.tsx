import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/212666270000?text=${encodeURIComponent('مرحباً، أريد الاستفسار عن فلتر المياه FILTRO.')}`;

  return (
    <motion.a 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center md:bottom-8 md:left-8"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
}
