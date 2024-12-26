import { useThemeStore } from '@/hooks/useTheme';
import { Button } from '@nextui-org/button';

export const SwitchTheme = () => {
  const toggleTheme = useThemeStore(e => e.toggleTheme);

  return (
    <div className='fixed opacity-80 right-2 top-2'>
      <Button disableRipple variant='light' onPress={toggleTheme}>
        Switch light/dark theme
      </Button>
    </div>
  );
};
