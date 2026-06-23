"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useLanguage } from '@/context/LanguageContext';
import { PREDEFINED_FOODS, FoodItem } from '@/lib/food-data';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Leaf, Search, PlusCircle } from 'lucide-react';

type FoodSelectorDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (food: FoodItem) => void;
};

export function FoodSelectorDialog({ isOpen, onClose, onSelect }: FoodSelectorDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card/95 backdrop-blur-2xl border-border/40 p-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
        <div className="p-8 pb-4">
          <DialogHeader className="gap-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <PlusCircle className="h-5 w-5" />
              </div>
              <DialogTitle className="text-2xl font-black tracking-tighter">
                {t('recurringFoods')}
              </DialogTitle>
            </div>
            <DialogDescription className="text-xs font-medium uppercase tracking-widest opacity-40">
              {t('subtitle')}
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="h-[400px] px-8 pb-8">
          <div className="grid grid-cols-1 gap-3">
            {PREDEFINED_FOODS.map((food) => (
              <Button
                key={food.id}
                variant="outline"
                className="justify-between h-auto py-4 px-5 border-border/40 hover:border-primary/40 hover:bg-primary/5 group rounded-[1.5rem] transition-all duration-300 hover:translate-x-1"
                onClick={() => {
                  onSelect(food);
                  onClose();
                }}
              >
                <div className="flex flex-col items-start text-left min-w-0 mr-4">
                  <span className="font-bold text-sm group-hover:text-primary transition-colors truncate w-full">
                    {t(food.nameKey)}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                     <span className="text-[10px] font-black text-primary/60 uppercase">
                      {food.calories} {t('calories')}
                    </span>
                    <div className="h-1 w-1 rounded-full bg-border" />
                    <span className="text-[10px] font-medium opacity-40 uppercase tracking-tighter">
                      P:{food.protein}g · C:{food.carbs}g · F:{food.fats}g
                    </span>
                  </div>
                </div>
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground shrink-0 transition-colors">
                  <Leaf className="h-3.5 w-3.5" />
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}