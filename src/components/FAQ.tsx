import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  { q: 'هل الدفع عند الاستلام؟', a: 'نعم، لا تدفع أي شيء حتى يصلك الفلتر وتتأكد منه بنفسك.' },
  { q: 'كم مدة التوصيل؟', a: 'نقوم بالتوصيل في غضون 24 إلى 48 ساعة كحد أقصى في جميع المدن المغربية.' },
  { q: 'هل يوجد ضمان على الجهاز؟', a: 'نعم، جميع أجهزتنا تأتي بضمان شامل لمدة سنتين ضد عيوب الصناعة.' },
  { q: 'هل التركيب سهل؟', a: 'بالنسبة للباقة القياسية، التركيب بسيط ومرفق بدليل يوضح الخطوات. أما الباقة الاحترافية فتشمل تركيباً كاملاً من قبل فني مختص.' },
  { q: 'كم مرة يتم تغيير الفلاتر؟', a: 'ينصح بتغيير الفلاتر الأولية كل 6 أشهر، والممبرين (الفلتر الرئيسي) كل سنة إلى سنتين حسب جودة المياه في منطقتك.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 text-lg">كل ما تحتاج معرفته عن فلتر FILTRO</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-right flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-primary">{faq.q}</span>
                <ChevronDown 
                  className={`text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
