"use client";

import React, { useState, useEffect } from 'react';
import { StatsHeader } from '@/components/dashboard/StatsHeader';
import { MealCard } from '@/components/dashboard/MealCard';
import { FoodSelectorDialog } from '@/components/dashboard/FoodSelectorDialog';
import { FoodItem } from '@/lib/food-data';

type MealState = {
  id: string;
  titleKey: string;
  items: (FoodItem & { instanceId: string })[];
};

export default function Home() {
  const [meals, setMeals] = useState<MealState[]>([
    { id: 'breakfast', titleKey: 'breakfast', items: [] },
    { id: 'lunch', titleKey: 'lunch', items: [] },
    { id: 'dinner', titleKey: 'dinner', items: [] },
    { id: 'snacks', titleKey: 'snacks', items: [] },
  ]);

  const [activeMealId, setActiveMealId] = useState<string | null>(null);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddFood = (mealId: string) => {
    setActiveMealId(mealId);
    setIsSelectorOpen(true);
  };

  const onSelectFood = (food: FoodItem) => {
    if (!activeMealId) return;

    const instanceId = Math.random().toString(36).substr(2, 9);
    setMeals(prevMeals => prevMeals.map(meal => {
      if (meal.id === activeMealId) {
        return {
          ...meal,
          items: [...meal.items, { ...food, instanceId }]
        };
      }
      return meal;
    }));
  };

  const onRemoveFood = (mealId: string, instanceId: string) => {
    setMeals(prevMeals => prevMeals.map(meal => {
      if (meal.id === mealId) {
        return {
          ...meal,
          items: meal.items.filter(item => item.instanceId !== instanceId)
        };
      }
      return meal;
    }));
  };

  const totalStats = meals.reduce((acc, meal) => {
    const mealTotals = meal.items.reduce((mAcc, item) => ({
      calories: mAcc.calories + item.calories,
      protein: mAcc.protein + item.protein
    }), { calories: 0, protein: 0 });

    return {
      calories: acc.calories + mealTotals.calories,
      protein: acc.protein + mealTotals.protein
    };
  }, { calories: 0, protein: 0 });

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-primary/20 overflow-x-hidden">
      <StatsHeader 
        totalCalories={totalStats.calories} 
        totalProtein={totalStats.protein} 
      />

      <main className="container mx-auto px-4 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-[1400px] mx-auto">
          {meals.map((meal, index) => (
            <div 
              key={meal.id} 
              style={{ animationDelay: `${index * 150}ms` }}
              className="animate-reveal fill-mode-both w-full"
            >
              <MealCard
                titleKey={meal.titleKey}
                items={meal.items}
                onAdd={() => handleAddFood(meal.id)}
                onRemove={(instanceId) => onRemoveFood(meal.id, instanceId)}
              />
            </div>
          ))}
        </div>
      </main>

      <FoodSelectorDialog
        isOpen={isSelectorOpen}
        onClose={() => setIsSelectorOpen(false)}
        onSelect={onSelectFood}
      />
      
      <footer className="w-full py-12 px-4 flex flex-col items-center gap-4">
        <div className="h-[1px] w-24 bg-border/40" />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20">
          NutriFlow &bull; {new Date().getFullYear()} &bull; Professional Wellness
        </p>
      </footer>
    </div>
  );
}