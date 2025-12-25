import { create } from "zustand";

interface AppState {
  selectedBrandId: string;
  selectedModuleId: string;
  setBrand: (id: string) => void;
  setModule: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedBrandId: "brand-1",
  selectedModuleId: "ai-visibility",
  setBrand: (id) => set({ selectedBrandId: id }),
  setModule: (id) => set({ selectedModuleId: id }),
}));
