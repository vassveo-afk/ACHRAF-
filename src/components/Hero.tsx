import { motion } from 'motion/react';
import { Droplet, ShieldCheck, Timer, Shield, CheckCircle2 } from 'lucide-react';
import productImage from '../assets/product-image.png';
export default function Hero() {
  const scrollToOrder = () => {
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-primary text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-accent/30 to-transparent blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30">
            <Timer size={16} />
            <span>🔥 عرض محدود لفترة قصيرة</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            اشرب ماءً نقياً <br />
            <span className="text-accent">وآمناً كل يوم</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            وفر المال، واحصل على مياه صحية مباشرة من منزلك مع فلتر RO المتطور.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
            <button 
              onClick={scrollToOrder}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent to-[#e6b95b] text-primary font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(216,162,58,0.4)] hover:shadow-[0_0_30px_rgba(216,162,58,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              اطلب الآن - الدفع عند الاستلام
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <CheckCircle2 className="text-accent" size={20} />
              <span>الدفع عند الاستلام</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Timer className="text-accent" size={20} />
              <span>توصيل سريع</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Shield className="text-accent" size={20} />
              <span>ضمان سنتين</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <ShieldCheck className="text-accent" size={20} />
              <span>جودة عالية</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full max-w-md lg:max-w-none relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent z-10"></div>
            <img 
              src={productImage} 
              alt="فلتر المياه المنزلي RO" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white text-primary p-4 rounded-xl shadow-xl z-20 animate-bounce">
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-2 rounded-full text-accent">
                <Droplet size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500">نقاء المياه</p>
                <p className="font-black text-lg">99.9%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
