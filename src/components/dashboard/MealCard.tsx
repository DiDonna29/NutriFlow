"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';
import { Trash2, Plus, Clock, Coffee, Sun, Moon, Utensils } from 'lucide-react';

type MealItem = {
  instanceId: string;
  name: string;
  nameKey?: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

type MealCardProps = {
  titleKey: string;
  items: MealItem[];
  onAdd: () => void;
  onRemove: (instanceId: string) => void;
};

const getMealIcon = (key: string) => {
  switch (key) {
    case 'breakfast': return <Coffee className="h-4 w-4" />;
    case 'lunch': return <Sun className="h-4 w-4" />;
    case 'dinner': return <Moon className="h-4 w-4" />;
    default: return <Clock className="h-4 w-4" />;
  }
};

export function MealCard({ titleKey, items, onAdd, onRemove }: MealCardProps) {
  const { t } = useLanguage();

  const totals = items.reduce(
    (acc, item) => ({
      calories: acc.calories + item.calories,
      protein: acc.protein + item.protein,
      carbs: acc.carbs + item.carbs,
      fats: acc.fats + item.fats,
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  return (
    <Card className="flex flex-col h-full border border-border/40 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-500 group overflow-hidden premium-shadow relative rounded-[2rem]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            {getMealIcon(titleKey)}
          </div>
          <CardTitle className="text-lg font-bold tracking-tight">
            {t(titleKey)}
          </CardTitle>
        </div>
        <Badge variant="secondary" className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-lg bg-primary/5 text-primary border-none">
          {totals.calories} {t('calories')}
        </Badge>
      </CardHeader>

      <CardContent className="flex-1 px-6">
        <div className="min-h-[140px] flex flex-col">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center opacity-20 py-10 text-center">
              <Utensils className="h-8 w-8 mb-2 stroke-1" />
              <p className="text-xs font-medium uppercase tracking-widest">{t('emptyMeal')}</p>
            </div>
          ) : (
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.instanceId} className="flex items-center justify-between group/item py-2 px-3 -mx-3 rounded-xl hover:bg-secondary/40 transition-all duration-200">
                  <div className="flex flex-col min-w-0 flex-1 mr-2">
                    <span className="font-semibold text-sm truncate">
                      {item.nameKey ? t(item.nameKey) : item.name}
                    </span>
                    <div className="flex gap-2 text-[10px] font-medium opacity-40 uppercase tracking-tighter">
                      <span>P:{item.protein}g</span>
                      <span>C:{item.carbs}g</span>
                      <span>F:{item.fats}g</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover/item:opacity-100 transition-all hover:bg-destructive/10 hover:text-destructive shrink-0"
                    onClick={() => onRemove(item.instanceId)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>

      <div className="px-6 py-4 mt-auto">
        <div className="p-4 rounded-2xl bg-secondary/30 flex justify-between items-center border border-border/20">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-30 leading-none mb-1">{t('total')}</span>
            <div className="flex gap-3 text-xs font-bold">
              <span className="text-primary">P: {totals.protein.toFixed(1)}g</span>
              <span className="opacity-60">C: {totals.carbs.toFixed(1)}g</span>
            </div>
          </div>
          <Button 
            size="sm" 
            onClick={onAdd}
            className="rounded-xl h-9 px-4 gap-1.5 font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 group/btn"
          >
            <Plus className="h-3.5 w-3.5 group-hover/btn:rotate-90 transition-transform duration-300" />
            <span className="text-[10px] uppercase tracking-wider">{t('addFood')}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}