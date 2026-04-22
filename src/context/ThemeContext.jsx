import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = {
  dark: {
    primaryDark: '#0a0e27',
    bgCard: '#1a1f3a',
    bgHover: 'rgba(0, 212, 255, 0.1)',
    textPrimary: '#ffffff',
    textSecondary: '#b0b6d9',
    borderColor: 'rgba(0, 212, 255, 0.2)',
    accentCyan: '#00d4ff',
    accentLight: '#e0f7ff',
  },
  black: {
    primaryDark: '#000000',
    bgCard: '#1a1a1a',
    bgHover: 'rgba(0, 212, 255, 0.08)',
    textPrimary: '#ffffff',
    textSecondary: '#a0a0a0',
    borderColor: 'rgba(128, 128, 128, 0.3)',
    accentCyan: '#00d4ff',
    accentLight: '#e0f7ff',
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('cortexium-theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('cortexium-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Apply CSS variables
    const themeColors = themes[theme];
    Object.entries(themeColors).forEach(([key, value]) => {
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      document.documentElement.style.setProperty(cssVarName, value);
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'black' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export default themes;
