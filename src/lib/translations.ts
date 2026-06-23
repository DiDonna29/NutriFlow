export const translations = {
  en: {
    title: "NutriFlow",
    subtitle: "Daily Meal Structure",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snacks: "Snacks",
    addFood: "Add Food",
    remove: "Remove",
    calories: "kcal",
    protein: "Protein",
    carbs: "Carbs",
    fats: "Fats",
    total: "Daily Total",
    themeLight: "Light Mode",
    themeDark: "Dark Mode",
    language: "Language",
    recurringFoods: "Quick Picks",
    emptyMeal: "No items added yet",
    foods: {
      oats: "Oats",
      eggs: "Eggs",
      kefir: "Kefir",
      banana: "Banana",
      chicken: "Chicken Breast",
      rice: "Brown Rice",
      avocado: "Avocado",
      almonds: "Almonds",
      apple: "Apple",
      yogurt: "Greek Yogurt"
    }
  },
  es: {
    title: "NutriFlow",
    subtitle: "Estructura de Comidas Diarias",
    breakfast: "Desayuno",
    lunch: "Almuerzo",
    dinner: "Cena",
    snacks: "Meriendas",
    addFood: "Agregar Alimento",
    remove: "Eliminar",
    calories: "kcal",
    protein: "Proteína",
    carbs: "Carbos",
    fats: "Grasas",
    total: "Total Diario",
    themeLight: "Modo Claro",
    themeDark: "Modo Oscuro",
    language: "Idioma",
    recurringFoods: "Selección Rápida",
    emptyMeal: "Sin alimentos agregados",
    foods: {
      oats: "Avena",
      eggs: "Huevos",
      kefir: "Kefir",
      banana: "Plátano",
      chicken: "Pechuga de Pollo",
      rice: "Arroz Integral",
      avocado: "Aguacate",
      almonds: "Almendras",
      apple: "Manzana",
      yogurt: "Yogur Griego"
    }
  }
};

export type Language = 'en' | 'es';
export type TranslationKey = keyof typeof translations.en;