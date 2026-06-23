export type FoodItem = {
  id: string;
  nameKey: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  icon?: string;
};

export const PREDEFINED_FOODS: FoodItem[] = [
  { id: '1', nameKey: 'foods.oats', calories: 150, protein: 5, carbs: 27, fats: 3 },
  { id: '2', nameKey: 'foods.eggs', calories: 140, protein: 12, carbs: 1, fats: 10 },
  { id: '3', nameKey: 'foods.kefir', calories: 100, protein: 8, carbs: 12, fats: 2 },
  { id: '4', nameKey: 'foods.banana', calories: 105, protein: 1, carbs: 27, fats: 0 },
  { id: '5', nameKey: 'foods.chicken', calories: 165, protein: 31, carbs: 0, fats: 3.6 },
  { id: '6', nameKey: 'foods.rice', calories: 216, protein: 5, carbs: 45, fats: 1.8 },
  { id: '7', nameKey: 'foods.avocado', calories: 160, protein: 2, carbs: 9, fats: 15 },
  { id: '8', nameKey: 'foods.almonds', calories: 164, protein: 6, carbs: 6, fats: 14 },
  { id: '9', nameKey: 'foods.apple', calories: 95, protein: 0.5, carbs: 25, fats: 0.3 },
  { id: '10', nameKey: 'foods.yogurt', calories: 100, protein: 10, carbs: 4, fats: 5 },
];