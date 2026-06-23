"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useLanguage } from '@/context/LanguageContext';
import { PREDEFINED_FOODS, FoodItem } from '@/lib/food-data';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

type FoodSelectorDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (food: FoodItem) => void;
};

export function FoodSelectorDialog({ isOpen, onClose, onSelect }: FoodSelectorDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card">
        <DialogHeader>
          <DialogTitle>{t('recurringFoods')}</DialogTitle>
          <DialogDescription>
            {t('subtitle')}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[300px] pr-4">
          <div className="grid grid-cols-1 gap-2">
            {PREDEFINED_FOODS.map((food) => (
              <Button
                key={food.id}
                variant="outline"
                className="justify-between h-auto py-3 px-4 hover:border-primary hover:bg-primary/5 group"
                onClick={() => {
                  onSelect(food);
                  onClose();
                }}
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {t(food.nameKey)}
                  </span>
                  <span className="text-xs opacity-60">
                    {food.calories} {t('calories')} · P:{food.protein}g C:{food.carbs}g F:{food.fats}g
                  </span>
                </div>
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground">
                  +
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}