import { CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Packages() {
  const scrollToOrder = (packageType: string) => {
    // We will set a custom event to notify the form
    const event = new CustomEvent('select-package', { detail: packageType });
    window.dispatchEvent(event);
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">اختر الباقة المناسبة لك</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            أسعار شفافة بدون أي رسوم خفية. استثمر في صحتك اليوم.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Standard Package */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">الباقة القياسية</h3>
            <p className="text-gray-500 mb-6">مثالية لمن يفضل التركيب الذاتي</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-primary">899</span>
              <span className="text-xl text-gray-500 font-semibold">درهم</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {['جهاز الفلترة', 'خزان المياه', 'توصيل مجاني', 'ضمان سنتين'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-green-500" size={24} />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => scrollToOrder('standard')}
              className="w-full py-4 rounded-xl font-bold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              اختر هذه الباقة
            </button>
          </motion.div>

          {/* Premium Package */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#1a2c45] to-primary rounded-3xl p-1 shadow-2xl relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-accent text-primary text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                <Star size={16} fill="currentColor" />
                الأكثر طلباً
              </div>
            </div>

            <div className="bg-white rounded-[1.4rem] p-8 sm:p-10 h-full border-4 border-transparent bg-clip-padding">
              <h3 className="text-2xl font-bold text-primary mb-2">الباقة الاحترافية</h3>
              <p className="text-gray-500 mb-6">راحة بال تامة مع خدمة التركيب</p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-primary">1199</span>
                <span className="text-xl text-gray-500 font-semibold">درهم</span>
              </div>
              
              <div className="mb-6">
                <p className="font-bold text-primary mb-4 pb-2 border-b border-gray-100">كل ما في الباقة القياسية، بالإضافة إلى:</p>
                <ul className="space-y-4">
                  {['تركيب احترافي', 'توصيل الأنابيب', 'اختبار النظام', 'تشغيل كامل'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="text-accent" size={24} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => scrollToOrder('premium')}
                className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-accent to-[#e6b95b] text-primary shadow-[0_4px_15px_rgba(216,162,58,0.3)] hover:shadow-[0_6px_25px_rgba(216,162,58,0.5)] hover:-translate-y-1 transition-all"
              >
                اختر هذه الباقة
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
