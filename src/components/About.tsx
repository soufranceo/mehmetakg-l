import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import ImageModal from './ImageModal';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12">{t('nav.about')}</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-64 h-64 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-gray-100 to-white animate-pulse" style={{ animationDelay: '0.10s' }}></div>
                <img
                  src="https://i.hizliresim.com/ekd4dlc.png"
                  alt="Profil"
                  className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedImage("https://i.hizliresim.com/ekd4dlc.png")}
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className={`transition-all duration-1000 delay-300 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  <h3 className="text-2xl font-semibold mb-4">Mehmet Akgül</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.description')}
                  </p>
                </div>
                <div className={`transition-all duration-1000 delay-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">{t('about.experience')}</h4>
                    <p className="text-gray-600">17+ {t('Years')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          alt="Profile"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default About;