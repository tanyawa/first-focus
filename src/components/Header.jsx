import React, { useState } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import FontSizeToggle from './FontSizeToggle';
import { Menu, X, Heart } from 'lucide-react';

const Header = ({ currentPage, onNavigate }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'howItWorks', label: t.nav.howItWorks },
    { key: 'assessment', label: t.nav.assessment },
    { key: 'resources', label: t.nav.resources },
    { key: 'faq', label: t.nav.faq },
    { key: 'contact', label: t.nav.contact },
    { key: 'auth', label: 'Login' }
  ];

  const handleNavigation = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">First Focus</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Button
                key={item.key}
                variant={currentPage === item.key ? "default" : "ghost"}
                onClick={() => handleNavigation(item.key)}
                className="text-sm"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <FontSizeToggle />
            <ThemeToggle />
            <LanguageToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  variant={currentPage === item.key ? "default" : "ghost"}
                  onClick={() => handleNavigation(item.key)}
                  className="justify-start"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

