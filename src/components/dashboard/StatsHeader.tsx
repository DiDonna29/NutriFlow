"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Languages, Leaf, Zap, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatsHeaderProps = {
  totalCalories: number;
  totalProtein: number;
};

export function StatsHeader({ totalCalories, totalProtein }: StatsHeaderProps) {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-6 pb-2">
      <div className="container mx-auto">
        <div className="glass-card rounded-[2rem] px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-6 border-none shadow-premium-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary transition-transform hover:scale-105 duration-300">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter text-foreground sm:text-2xl leading-none">
                {t('title')}
              </h1>
              <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] opacity-40 mt-1">
                {t('subtitle')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-8 flex-1 sm:flex-none justify-center w-full sm:w-auto">
            <div className="flex gap-4 sm:gap-10">
              <div className="flex flex-col items-center sm:items-end">
                <div className="flex items-center gap-1.5 opacity-40 mb-0.5">
                  <Zap className="h-3 w-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t('calories')}</span>
                </div>
                <span className="font-mono text-xl sm:text-2xl font-black text-primary tabular-nums">
                  {totalCalories}
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-end">
                <div className="flex items-center gap-1.5 opacity-40 mb-0.5">
                  <Activity className="h-3 w-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t('protein')}</span>
                </div>
                <span className="font-mono text-xl sm:text-2xl font-black text-foreground tabular-nums">
                  {totalProtein.toFixed(1)}<small className="text-xs font-medium ml-0.5 uppercase">g</small>
                </span>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-border/40 hidden sm:block" />

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all active:scale-90"
              >
                <Languages className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all active:scale-90"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}