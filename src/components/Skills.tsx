import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Code, Globe, Search, Layout, Database, Terminal, TrendingUp, Camera, ImagePlus } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useTranslation();

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t('skills.web.title'),
      description: t('skills.web.description')
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: t('skills.seo.title'),
      description: t('skills.seo.description')
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: t('skills.hybrid.title'),
      description: t('skills.hybrid.description')
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('skills.data.title'),
      description: t('skills.data.description')
    },
    {
      icon: <ImagePlus className="w-8 h-8" />,
      title: t('skills.media.title'),
      description: t('skills.media.description')
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: t('skills.advertising.title'),
      description: t('skills.advertising.description')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('skills.hosting.title'),
      description: t('skills.hosting.description')
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('skills.sales.title'),
      description: t('skills.sales.description')
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-down">
          {t('skills.title')}
        </h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-500 transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;