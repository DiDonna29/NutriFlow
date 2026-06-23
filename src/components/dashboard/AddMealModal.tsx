"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Calculator } from 'lucide-react';

type AddMealModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (mealId: string, food: { name: string; calories: number; protein: number; carbs: number; fats: number }) => void;
};

export function AddMealModal({ isOpen, onClose, onAdd }: AddMealModalProps) {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [mealType, setMealType] = useState('breakfast');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !calories) return;

    onAdd(mealType, {
      name,
      calories: Number(calories),
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fats: Number(fats) || 0,
    });

    setName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFats('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card/95 backdrop-blur-2xl border-border/40 p-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="p-8 pb-4">
            <DialogHeader className="gap-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Calculator className="h-5 w-5" />
                </div>
                <DialogTitle className="text-2xl font-black tracking-tighter">
                  {t('customFood')}
                </DialogTitle>
              </div>
              <DialogDescription className="text-[10px] font-black uppercase tracking-widest opacity-40">
                Manual nutritional entry
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="px-8 pb-8 space-y-4">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">
                {t('foodName')}
              </Label>
              <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Protein Shake"
                className="rounded-2xl bg-secondary/30 border-none focus:ring-primary/20"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">
                  {t('caloriesLabel')}
                </Label>
                <Input 
                  type="number"
                  value={calories} 
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="0"
                  className="rounded-2xl bg-secondary/30 border-none focus:ring-primary/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">
                  {t('mealType')}
                </Label>
                <Select value={mealType} onValueChange={setMealType}>
                  <SelectTrigger className="rounded-2xl bg-secondary/30 border-none focus:ring-primary/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-border/40">
                    <SelectItem value="breakfast">{t('breakfast')}</SelectItem>
                    <SelectItem value="lunch">{t('lunch')}</SelectItem>
                    <SelectItem value="dinner">{t('dinner')}</SelectItem>
                    <SelectItem value="snacks">{t('snacks')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">P (g)</Label>
                <Input 
                  type="number" 
                  value={protein} 
                  onChange={(e) => setProtein(e.target.value)}
                  className="rounded-2xl bg-secondary/30 border-none focus:ring-primary/20"
                  placeholder="0"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">C (g)</Label>
                <Input 
                  type="number" 
                  value={carbs} 
                  onChange={(e) => setCarbs(e.target.value)}
                  className="rounded-2xl bg-secondary/30 border-none focus:ring-primary/20"
                  placeholder="0"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">F (g)</Label>
                <Input 
                  type="number" 
                  value={fats} 
                  onChange={(e) => setFats(e.target.value)}
                  className="rounded-2xl bg-secondary/30 border-none focus:ring-primary/20"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="p-8 pt-0 flex flex-row gap-3">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={onClose}
              className="flex-1 rounded-2xl h-12 font-bold uppercase tracking-widest text-xs"
            >
              {t('cancel')}
            </Button>
            <Button 
              type="submit" 
              className="flex-1 rounded-2xl h-12 font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20"
            >
              {t('save')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}