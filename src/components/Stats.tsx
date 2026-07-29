import { Users, ThumbsUp, Truck, Shield } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: <Users size={32} />, value: '+5000', label: 'عميل سعيد' },
    { icon: <ThumbsUp size={32} />, value: '98%', label: 'نسبة الرضا' },
    { icon: <Truck size={32} />, value: '24H', label: 'توصيل سريع' },
    { icon: <Shield size={32} />, value: '2 Years', label: 'ضمان شامل' },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-x-reverse divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="text-accent mb-4">{stat.icon}</div>
              <div className="text-4xl font-black mb-2">{stat.value}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
