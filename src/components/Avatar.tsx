import type NextImage from 'next/image';
import type React from 'react';
import clsx from 'clsx';
import { getImageProps } from 'next/image';
import { Avatar as AvatarPrimitive } from 'radix-ui';

export interface AvatarProps {
  className?: string;
  image?: Omit<React.ComponentPropsWithoutRef<typeof NextImage>, 'alt' | 'src' | 'className'> & {
    alt?: string;
    src: string;
  };
  fallback: string;
}

export const Avatar = ({
  className,
  image,
  fallback,
}: AvatarProps) => {
  const nextImageProps = image && getImageProps({
    alt: fallback,
    ...image,
  });

  return (
    <AvatarPrimitive.Root
      className={clsx(
        'relative flex shrink-0 overflow-hidden rounded-full',
        className,
      )}
    >
      {image && (
        <AvatarPrimitive.Image className='aspect-square size-full' {...nextImageProps?.props} />
      )}
      <AvatarPrimitive.Fallback className='size-full flex items-center justify-center rounded-full bg-secondary-bg text-sm'>
        {fallback[0].toUpperCase()}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
