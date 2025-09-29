import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => changeLanguage(language === 'en' ? 'th' : 'en')}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? 'ไทย' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;

