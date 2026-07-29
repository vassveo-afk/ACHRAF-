import { Filter, Droplets, HeartPulse, Banknote, Wrench, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Filter size={32} />,
      title: 'تنقية متعددة المراحل',
      description: 'نظام متطور يمرر المياه عبر عدة فلاتر لضمان النقاء التام.'
    },
    {
      icon: <Droplets size={32} />,
      title: 'يزيل الشوائب والكلور',
      description: 'يقضي على 99.9% من البكتيريا، الرصاص، والكلور والمواد الضارة.'
    },
    {
      icon: <HeartPulse size={32} />,
      title: 'مياه صحية للشرب',
      description: 'يضيف المعادن المفيدة للجسم ويوازن نسبة الحموضة في الماء.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'يحسن الطعم والرائحة',
      description: 'تخلص من أي طعم أو رائحة مزعجة واستمتع بماء نقي وعذب.'
    },
    {
      icon: <Banknote size={32} />,
      title: 'يوفر المال',
      description: 'وداعاً لشراء قوارير المياه البلاستيكية المكلفة أسبوعياً.'
    },
    {
      icon: <Wrench size={32} />,
      title: 'سهل الصيانة',
      description: 'تغيير الفلاتر سهل جداً ولا يتطلب أدوات معقدة أو خبرة.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">مميزات فلتر FILTRO المتطور</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            صمم خصيصاً ليمنحك وعائلتك أفضل جودة للمياه بأحدث تقنيات التناضح العكسي (RO).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
