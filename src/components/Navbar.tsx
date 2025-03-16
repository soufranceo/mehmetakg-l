import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { title: t('nav.home'), id: 'home' },
    { title: t('nav.projects'), id: 'projects' },
    { title: t('nav.skills'), id: 'skills' },
    { title: t('nav.about'), id: 'about' },
    { title: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 animate-slide-in">
            <h1 className="text-2xl font-bold text-gray-800">Mehmet Akgül</h1>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors animate-fade-in-down`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <LanguageSelector />
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Toggle language menu"
            >
              <Globe size={24} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil dil seçici menüsü */}
      {isLangMenuOpen && (
        <div className="md:hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 animate-fade-in">
          <div className="px-4 py-2">
            <LanguageSelector />
          </div>
        </div>
      )}

      {/* Ana mobil menü */}
      {isOpen && (
        <div className="md:hidden animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {menuItems.map((item, index) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 hover:text-gray-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;