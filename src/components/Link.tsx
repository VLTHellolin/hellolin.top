import type React from 'react';
import NextLink from 'next/link';
import { Slot } from 'radix-ui';
import { type BakeIngredient, createRecipe } from '@/utils/recipe';

const bake = createRecipe(
  'inline-block break-words transition-(colors ease-in-out duration-200)',
  {
    variant: {
      normal: 'text-fg',
      muted: 'text-muted-fg hover:text-fg',
    },
    decoration: {
      _: 'underline underline-offset-3px decoration-muted-fg hover:decoration-fg',
    },
  },
);

export interface LinkProps extends React.ComponentPropsWithRef<typeof NextLink>, BakeIngredient<typeof bake> {
  asChild?: boolean;
  external?: boolean;
}

export const Link = ({
  variant = 'normal',
  decoration = false,
  asChild = false,
  external = false,
  className,
  children,
  ...props
}: LinkProps) => {
  const Component = asChild ? Slot.Root : NextLink;

  if (external) {
    props.target ??= '_blank';
    props.rel ??= 'nofollow noreferrer noopener';
  }

  return (
    <Component
      className={bake({ variant, decoration, className })}
      {...props}
    >
      {children}
    </Component>
  );
};
