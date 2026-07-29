import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
const images = [
  "/product-image.png",
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">تصميم عصري يناسب مطبخك</h2>
          <p className="text-gray-600 text-lg">نظام فلترة لا يأخذ مساحة وشكل أنيق يندمج مع ديكور منزلك.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white"
              >
                <img 
                  src={selectedImage} 
                  alt="فلتر مياه" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex flex-row md:flex-col gap-4 overflow-x-auto pb-4 md:pb-0 md:w-32">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`shrink-0 w-24 h-24 md:w-full md:h-32 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-accent shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={img} alt={`صورة ${i+1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
