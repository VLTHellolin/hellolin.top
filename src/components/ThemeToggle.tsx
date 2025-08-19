'use client';

import { useTheme } from 'next-themes';
import { Button } from './Button';
import { Icon } from './Icon';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant='ghost' size='icon' onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light'); }}>
      <Icon label='Toggle Theme' className='i-lucide-sun dark:i-lucide-moon' />
    </Button>
  );
};
