import { useThemeStore } from '@/hooks/useTheme';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@nextui-org/button';

export const SwitchTheme = () => {
  const theme = useThemeStore(e => e.theme);
  const toggleTheme = useThemeStore(e => e.toggleTheme);

  return (
    <div className='fixed opacity-80 right-2 top-2'>
      <Button disableRipple isIconOnly variant='light' onPress={toggleTheme}>
        <Icon icon={`material-symbols:${theme}-mode-outline-rounded`} width={20} />
      </Button>
    </div>
  );
};
