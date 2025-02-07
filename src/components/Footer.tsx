import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const phoneNumber = "905533491810";
  const welcomeMessage = encodeURIComponent("Merhaba size siteniz üzerinden ulaşıyorum, bilgi alabilir miyim");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${welcomeMessage}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-green-400 transition-colors group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:text-green-400 transition-colors" />
                +90 553 349 1810
              </a>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                tr.mehmetakgül@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Bursa,Türkiye
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-300">Ana Sayfa</a></li>
              <li><a href="#about" className="hover:text-gray-300">Hakkımızda</a></li>
              <li><a href="#services" className="hover:text-gray-300">Hizmetler</a></li>
              <li><a href="#contact" className="hover:text-gray-300">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Facebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Mehmet Akgül Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;