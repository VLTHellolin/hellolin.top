import { useTheme } from '@/hooks/useTheme';
import { Button } from '@nextui-org/react';

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='fixed opacity-80 right-2 top-2'>
      <Button disableRipple variant='light' onPress={toggleTheme}>
        Switch light/dark theme
      </Button>
    </div>
  );
};
