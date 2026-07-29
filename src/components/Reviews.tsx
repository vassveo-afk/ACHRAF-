import { Star, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  { name: 'محمد العلوي', city: 'الدار البيضاء', text: 'صراحة الفلتر ممتاز جداً، فرق كبير في طعم الماء وحتى الشاي والقهوة صار طعمهم أحسن. التركيب كان احترافي وفي الوقت.' },
  { name: 'سناء بنسودة', city: 'الرباط', text: 'تهنيت من شريان القراعي ديال سيدي علي كل نهار. استثمار زوين للصحة وللجيب. شكرا FILTRO على الخدمة الممتازة.' },
  { name: 'يوسف التازي', city: 'مراكش', text: 'الماء عندنا في مراكش كيكون فيه الكالكير بزاف، ولكن من بعد ما ركبت هاد الفلتر، الماء ولى خفيف ونقي. كنصح بيه أي واحد.' },
  { name: 'ليلى العمراني', city: 'طنجة', text: 'جودة عالية وتصميم زوين ماكياخدش ليسباس تحت البوتاجي. والدراري الصغار ولاو كيشربو الماء بزاف حيت طعمو زوين.' },
  { name: 'أمين شكري', city: 'أكادير', text: 'خدمة ما بعد البيع في المستوى، جاو ركبوه ليا في أقل من 24 ساعة. الباقة الاحترافية كتستاهل كل درهم.' },
  { name: 'فاطمة الزهراء', city: 'فاس', text: 'كنت مترددة في الأول ولكن ملي جربتو ندمت لي ماركبتوش شحال هادي. الماء صافي بحال ديال العوينة.' },
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ماذا يقول عملاؤنا؟</h2>
          <p className="text-gray-600 text-lg">آلاف العائلات المغربية تثق في FILTRO للحصول على مياه صحية.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-6 rounded-2xl border border-gray-100"
            >
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
              
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.city}</p>
                </div>
                <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-lg text-xs font-semibold">
                  <ShieldCheck size={14} />
                  <span>مشتري مؤكد</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
