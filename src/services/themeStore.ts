import { create } from "zustand";

interface ThemeState {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const themeStore = create<ThemeState>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
}));

export default themeStore;
