import { create } from "zustand";
import { AuditModule } from "@/lib/types";

/**
 * Tie state values to domain models instead of generic strings
 * This improves type safety without adding complexity
 */
type AuditModuleId = AuditModule["id"];

interface AppState {
  selectedBrandId: string;
  selectedModuleId: AuditModuleId;
  setBrand: (id: string) => void;
  setModule: (id: AuditModuleId) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedBrandId: "brand-1",
  selectedModuleId: "ai-visibility",
  setBrand: (id) => set({ selectedBrandId: id }),
  setModule: (id) => set({ selectedModuleId: id }),
}));
