import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, ShieldCheck, MapPin, Phone, User, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const orderSchema = z.object({
  fullName: z.string().min(3, { message: 'الاسم الكامل مطلوب' }),
  phone: z.string().min(10, { message: 'رقم الهاتف غير صالح' }),
  city: z.string().min(2, { message: 'المدينة مطلوبة' }),
  address: z.string().min(5, { message: 'العنوان مطلوب' }),
  notes: z.string().optional(),
  package: z.enum(['standard', 'premium'])
});

type OrderFormValues = z.infer<typeof orderSchema>;

const googleSheetsWebhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

export default function OrderForm({ onSuccess }: { onSuccess: (data: OrderFormValues) => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      package: 'premium',
      notes: ''
    }
  });

  const selectedPackage = watch('package');

  useEffect(() => {
    const handleSelectPackage = (e: CustomEvent<string>) => {
      setValue('package', e.detail as 'standard' | 'premium');
    };
    window.addEventListener('select-package', handleSelectPackage as EventListener);
    return () => window.removeEventListener('select-package', handleSelectPackage as EventListener);
  }, [setValue]);

  const onSubmit = async (data: OrderFormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      if (!googleSheetsWebhookUrl) {
        throw new Error('Missing Google Sheets webhook URL');
      }

      await fetch(googleSheetsWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
        }),
      });

      onSuccess(data);
    } catch (err) {
      console.error('Order submission failed.', err);
      setSubmitError('تعذر إرسال الطلب. المرجو المحاولة مرة أخرى أو التواصل معنا عبر واتساب.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">اطلب الآن والدفع عند الاستلام</h2>
          <p className="text-gray-600 text-lg">الكمية محدودة! املأ الاستمارة وسنتصل بك لتأكيد طلبك.</p>
        </div>

        <div className="bg-surface rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-yellow-300"></div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Package Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <label className={`cursor-pointer rounded-2xl p-4 border-2 transition-all ${selectedPackage === 'standard' ? 'border-accent bg-accent/5' : 'border-gray-200 bg-white hover:border-accent/50'}`}>
                <input type="radio" value="standard" {...register('package')} className="sr-only" />
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-primary">الباقة القياسية</span>
                  {selectedPackage === 'standard' && <CheckCircle2 className="text-accent" size={20} />}
                </div>
                <div className="text-2xl font-black text-primary">899 درهم</div>
              </label>

              <label className={`cursor-pointer rounded-2xl p-4 border-2 transition-all ${selectedPackage === 'premium' ? 'border-accent bg-accent/5' : 'border-gray-200 bg-white hover:border-accent/50'}`}>
                <input type="radio" value="premium" {...register('package')} className="sr-only" />
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">الباقة الاحترافية</span>
                    <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-md font-bold">مع التركيب</span>
                  </div>
                  {selectedPackage === 'premium' && <CheckCircle2 className="text-accent" size={20} />}
                </div>
                <div className="text-2xl font-black text-primary">1199 درهم</div>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">الاسم الكامل *</label>
                <div className="relative">
                  <User className="absolute right-3 top-3.5 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    {...register('fullName')}
                    className="w-full bg-white border border-gray-200 rounded-xl pr-10 pl-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="الاسم والنسب"
                  />
                </div>
                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">رقم الهاتف *</label>
                <div className="relative">
                  <Phone className="absolute right-3 top-3.5 text-gray-400" size={20} />
                  <input 
                    type="tel" 
                    {...register('phone')}
                    className="w-full bg-white border border-gray-200 rounded-xl pr-10 pl-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-left rtl:text-right"
                    placeholder="06XXXXXXXX"
                    dir="ltr"
                  />
                </div>
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">المدينة *</label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-3.5 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    {...register('city')}
                    className="w-full bg-white border border-gray-200 rounded-xl pr-10 pl-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="مدينتك"
                  />
                </div>
                {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">العنوان *</label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-3.5 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    {...register('address')}
                    className="w-full bg-white border border-gray-200 rounded-xl pr-10 pl-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="العنوان بالتفصيل"
                  />
                </div>
                {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">ملاحظات (اختياري)</label>
              <textarea 
                {...register('notes')}
                rows={3}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                placeholder="أي معلومات إضافية للتوصيل..."
              />
            </div>

            {submitError && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium">
                {submitError}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-5 rounded-xl font-bold text-xl bg-gradient-to-r from-accent to-[#e6b95b] text-primary shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-4"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>
                  <ShieldCheck size={24} />
                  تأكيد الطلب - الدفع عند الاستلام
                </>
              )}
            </button>
            <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center gap-2">
              <ShieldCheck size={16} /> معلوماتك مشفرة ومحمية بالكامل
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
