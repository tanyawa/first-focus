import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('firstFocusTheme');
    const savedFontSize = localStorage.getItem('firstFocusFontSize');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    }
    
    if (savedFontSize) {
      setFontSize(savedFontSize);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply font size
    document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg');
    if (fontSize === 'small') {
      document.documentElement.classList.add('text-sm');
    } else if (fontSize === 'large') {
      document.documentElement.classList.add('text-lg');
    } else {
      document.documentElement.classList.add('text-base');
    }
  }, [theme, fontSize]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('firstFocusTheme', newTheme);
  };

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
    localStorage.setItem('firstFocusFontSize', newSize);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      fontSize, 
      changeFontSize 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

