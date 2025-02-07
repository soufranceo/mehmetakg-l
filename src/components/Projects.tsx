import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import ImageModal from './ImageModal';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: t('projects.web.title'),
      description: t('projects.web.description'),
      image: "https://i.hizliresim.com/du1zizk.png",
    },
    {
      title: t('projects.design.title'),
      description: t('projects.design.description'),
      image: "https://i.hizliresim.com/dk4kbz4.png",
    },
    {
      title: t('projects.menu.title'),
      description: t('projects.menu.description'),
      image: "https://i.hizliresim.com/70v6t2f.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-down">
          {t('projects.title')}
        </h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(project.image)}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          alt={t('projects.imageAlt')}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default Projects;