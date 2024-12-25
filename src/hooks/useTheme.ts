import { create } from 'zustand';

type Theme = 'light' | 'dark';

const getDefaultTheme = () => {
  let stored = localStorage.getItem('theme') as Theme | null;
  if (!stored) stored = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.classList.add(stored);
  return stored;
};

export interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>(set => ({
  theme: getDefaultTheme(),
  toggleTheme: () =>
    set(state => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove(state.theme);
      document.documentElement.classList.add(newTheme);
      return { theme: newTheme };
    }),
}));
