import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("linkup-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("linkup-theme", theme);
    set({ theme });
  },
}));
