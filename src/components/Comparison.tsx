import { XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Comparison() {
  const comparisons = [
    { label: 'التكلفة الشهرية', bottled: 'عالية جداً', filter: 'اقتصادية (مرة واحدة)' },
    { label: 'سهولة الاستخدام', bottled: 'متعبة (حمل وتركيب)', filter: 'سهلة (مباشرة من الصنبور)' },
    { label: 'التخزين', bottled: 'تأخذ مساحة كبيرة', filter: 'لا تأخذ مساحة (تحت الحوض)' },
    { label: 'توفر المياه', bottled: 'قد تنفد في أي وقت', filter: 'متوفرة 24/7' },
    { label: 'جودة المياه', bottled: 'معرضة للشمس والتخزين', filter: 'نقية ومفلترة فورياً' },
    { label: 'صديق للبيئة', bottled: 'نفايات بلاستيكية', filter: 'مستدام وصديق للبيئة' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">لماذا تختار فلتر المياه؟</h2>
          <p className="text-gray-600 text-lg">قارن بنفسك واكتشف الفرق الكبير في الجودة والتكلفة.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="grid grid-cols-3 bg-primary text-white p-6 font-bold text-center text-lg">
            <div className="text-right">الميزة</div>
            <div className="text-gray-400">قوارير المياه</div>
            <div className="text-accent text-xl">فلتر FILTRO</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-100">
            {comparisons.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="grid grid-cols-3 p-4 sm:p-6 items-center text-center hover:bg-gray-50 transition-colors"
              >
                <div className="text-right font-semibold text-primary">{item.label}</div>
                <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
                  <XCircle className="text-red-400" size={24} />
                  <span>{item.bottled}</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-primary font-bold text-sm">
                  <CheckCircle2 className="text-green-500" size={24} />
                  <span>{item.filter}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
