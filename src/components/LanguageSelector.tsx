import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'tr', name: 'TR' },
    { code: 'en', name: 'EN' },
    { code: 'ar', name: 'العربية' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            i18n.language === lang.code
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;