"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Languages, Leaf } from 'lucide-react';

type StatsHeaderProps = {
  totalCalories: number;
  totalProtein: number;
};

export function StatsHeader({ totalCalories, totalProtein }: StatsHeaderProps) {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border/40 py-4 mb-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-xl text-primary-foreground shadow-lg shadow-primary/20">
            <Leaf className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground font-headline">
              {t('title')}
            </h1>
            <p className="text-sm opacity-60">{t('subtitle')}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
             <span className="text-xs font-bold uppercase tracking-wider opacity-60">{t('total')}</span>
             <div className="flex gap-4">
                <span className="font-mono text-xl font-bold text-primary">{totalCalories} <small className="text-[10px]">{t('calories')}</small></span>
                <span className="font-mono text-xl font-bold text-foreground">{totalProtein.toFixed(1)} <small className="text-[10px]">g {t('protein')}</small></span>
             </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="rounded-full hover:bg-primary/10 border-primary/20"
              title={t('language')}
            >
              <Languages className="h-4 w-4 text-primary" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10 border-primary/20"
              title={theme === 'light' ? t('themeDark') : t('themeLight')}
            >
              {theme === 'light' ? <Moon className="h-4 w-4 text-primary" /> : <Sun className="h-4 w-4 text-primary" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}