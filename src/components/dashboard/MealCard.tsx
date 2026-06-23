"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';
import { FoodItem } from '@/lib/food-data';
import { Trash2, Plus, Utensils } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type MealCardProps = {
  titleKey: string;
  items: (FoodItem & { instanceId: string })[];
  onAdd: () => void;
  onRemove: (instanceId: string) => void;
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
    <Card className="flex flex-col h-full shadow-lg border-none bg-card hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Utensils className="h-4 w-4" />
          </div>
          <CardTitle className="text-xl font-headline tracking-tight">
            {t(titleKey)}
          </CardTitle>
        </div>
        <Badge variant="secondary" className="font-mono">
          {totals.calories} {t('calories')}
        </Badge>
      </CardHeader>

      <CardContent className="flex-1 space-y-3 pt-4">
        {items.length === 0 ? (
          <div className="text-center py-8 opacity-50 italic text-sm">
            {t('emptyMeal')}
          </div>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.instanceId} className="flex items-center justify-between group/item p-2 rounded-md hover:bg-muted/50 transition-colors">
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{t(item.nameKey)}</span>
                  <div className="flex gap-2 text-[10px] opacity-70">
                    <span>P: {item.protein}g</span>
                    <span>C: {item.carbs}g</span>
                    <span>F: {item.fats}g</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 opacity-0 group-item/hover:opacity-100 group-hover:opacity-100 transition-opacity text-destructive"
                  onClick={() => onRemove(item.instanceId)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <Separator className="mx-6 opacity-20" />

      <CardFooter className="pt-4 flex justify-between items-center">
        <div className="flex flex-col text-[10px] uppercase tracking-wider opacity-60 font-bold">
          <span>{t('protein')}: {totals.protein.toFixed(1)}g</span>
          <span>{t('carbs')}: {totals.carbs.toFixed(1)}g</span>
        </div>
        <Button 
          size="sm" 
          onClick={onAdd}
          className="rounded-full px-4 gap-1 hover:scale-105 transition-transform"
        >
          <Plus className="h-3 w-3" />
          {t('addFood')}
        </Button>
      </CardFooter>
    </Card>
  );
}