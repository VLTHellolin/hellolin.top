import clsx from 'clsx';
import { motion } from 'motion/react';

export interface BackgroundProps {
  image?: string;
  position?: 'left' | 'right';
}

export const Background = ({ image, position }: BackgroundProps) => {
  return (
    <div
      className={clsx(
        'fixed hidden md:block -z-10 pointer-events-none opacity-40 dark:opacity-30',
        position === 'left' && '-left-[30%] -bottom-[80%]',
        position === 'right' && '-right-[20%] -top-[40%]'
      )}
      aria-hidden
    >
      <motion.img
        alt='background'
        src={image}
        className='relative shadow-black/10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
      />
    </div>
  );
};
