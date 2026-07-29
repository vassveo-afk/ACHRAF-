import { useEffect } from 'react';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ThankYouPage({ orderData }: { orderData: any }) {
  
  useEffect(() => {
    // Fire TikTok Pixel if defined globally
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('CompletePayment');
      (window as any).ttq.track('PlaceAnOrder');
    }
    window.scrollTo(0, 0);
  }, []);

  const generateMessage = () => {
    const pkgName = orderData.package === 'premium' ? 'الباقة الاحترافية' : 'الباقة القياسية';
    const pkgPrice = orderData.package === 'premium' ? '1199 درهم' : '899 درهم';
    
    return `مرحباً، أود تأكيد طلبي لفلتر FILTRO.
    
*معلومات الطلب:*
الاسم: ${orderData.fullName}
الهاتف: ${orderData.phone}
المدينة: ${orderData.city}
العنوان: ${orderData.address}
الباقة: ${pkgName} (${pkgPrice})
الملاحظات: ${orderData.notes || 'لا يوجد'}

المرجو تأكيد الطلب. شكراً.`;
  };

  const whatsappUrl = `https://wa.me/212666270000?text=${encodeURIComponent(generateMessage())}`;

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
        
        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">تم استلام طلبك بنجاح!</h1>
        <p className="text-gray-600 mb-8 text-lg">
          شكراً لثقتك في FILTRO. سنتصل بك قريباً لتأكيد موعد التوصيل.
        </p>
        
        <div className="bg-gray-50 rounded-2xl p-6 text-right mb-8 border border-gray-100">
          <h3 className="font-bold text-primary mb-4 border-b border-gray-200 pb-2">ملخص الطلب:</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex justify-between"><span className="text-gray-500">الاسم:</span> <span className="font-semibold">{orderData.fullName}</span></li>
            <li className="flex justify-between"><span className="text-gray-500">الهاتف:</span> <span className="font-semibold" dir="ltr">{orderData.phone}</span></li>
            <li className="flex justify-between"><span className="text-gray-500">المدينة:</span> <span className="font-semibold">{orderData.city}</span></li>
            <li className="flex justify-between"><span className="text-gray-500">الباقة:</span> <span className="font-semibold text-accent">{orderData.package === 'premium' ? 'الباقة الاحترافية' : 'الباقة القياسية'}</span></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-500 font-semibold mb-2">لتسريع عملية التوصيل، يرجى تأكيد طلبك عبر واتساب:</p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle size={24} />
            تأكيد الطلب عبر واتساب
          </a>
          
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-4 text-gray-500 font-semibold hover:text-primary transition-colors flex items-center justify-center gap-2"
          >
            <ArrowRight size={18} />
            العودة للصفحة الرئيسية
          </button>
        </div>
      </motion.div>
    </div>
  );
}
