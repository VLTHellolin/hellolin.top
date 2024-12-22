import clsx from 'clsx';
import { useEffect, useState } from 'react';

export interface BackgroundProps {
  image?: string;
  position?: 'left' | 'right';
}

export const Background = ({ image, position }: BackgroundProps) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true));
  return (
    <div
      className={clsx(
        'fixed hidden md:block -z-10 pointer-events-none opacity-40 dark:opacity-30',
        position === 'left' && '-left-[30%] -bottom-[80%]',
        position === 'right' && '-right-[20%] -top-[40%]'
      )}
      aria-hidden
    >
      <img
        alt='background'
        src={image}
        className='relative shadow-black/10 opacity-0 data-[loaded=true]:opacity-100 transition-transform-opacity !duration-700'
        data-loaded={loaded}
      />
    </div>
  );
};
