import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { translations } from '../data/translations';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import FontSizeToggle from './FontSizeToggle';
import { Heart, LogOut, User } from 'lucide-react';

const AuthenticatedHeader = () => {
  const { language } = useLanguage();
  const { user, signOut } = useAuth();
  const t = translations[language];

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-primary">First Focus</span>
        </div>

        {/* User Info & Controls */}
        <div className="flex items-center gap-4">
          {user && (
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <User className="h-4 w-4" />
              <span className="text-muted-foreground">
                {user.childInfo?.name || user.email}
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <FontSizeToggle />
            
            {user && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {language === 'en' ? 'Sign Out' : 'ออกจากระบบ'}
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthenticatedHeader;

