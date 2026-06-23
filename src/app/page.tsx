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

  return (
    <div className="min-h-screen pb-20 selection:bg-primary/20">
      <StatsHeader 
        totalCalories={totalStats.calories} 
        totalProtein={totalStats.protein} 
      />

      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((meal, index) => (
            <div 
              key={meal.id} 
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
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
      
      <footer className="fixed bottom-0 w-full py-4 text-center text-xs opacity-40">
        © {new Date().getFullYear()} NutriFlow - Wellness & Balance
      </footer>
    </div>
  );
}