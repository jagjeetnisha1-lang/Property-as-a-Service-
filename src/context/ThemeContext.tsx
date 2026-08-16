import React, { createContext, useContext, useState, useEffect } from 'react';
import { DesignTheme, HeroVariant, ThemeMeta } from '../types';
import { THEME_PRESETS } from '../data/themePresets';

interface ThemeContextType {
  theme: DesignTheme;
  setTheme: (theme: DesignTheme) => void;
  heroVariant: HeroVariant;
  setHeroVariant: (variant: HeroVariant) => void;
  currentThemeMeta: ThemeMeta;
  allThemes: ThemeMeta[];
  isDesignDrawerOpen: boolean;
  setIsDesignDrawerOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<DesignTheme>('dark-amber');
  const [heroVariant, setHeroVariant] = useState<HeroVariant>('split-calculator');
  const [isDesignDrawerOpen, setIsDesignDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    // Read from localStorage if previously chosen
    const savedTheme = localStorage.getItem('propos_theme') as DesignTheme;
    if (savedTheme && ['dark-amber', 'ivory-emerald', 'clean-cobalt', 'monochrome-terracotta'].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (newTheme: DesignTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('propos_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const currentThemeMeta = THEME_PRESETS.find((t) => t.id === theme) || THEME_PRESETS[0];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        heroVariant,
        setHeroVariant,
        currentThemeMeta,
        allThemes: THEME_PRESETS,
        isDesignDrawerOpen,
        setIsDesignDrawerOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
