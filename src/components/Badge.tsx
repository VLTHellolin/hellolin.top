import type React from 'react';
import { Slot } from 'radix-ui';
import { type BakeIngredient, createRecipe } from '@/utils/recipe';

const bake = createRecipe(
  [
    'relative inline-flex',
    'shrink-0 [&_.icon]:shrink-0 outline-none',
    'items-center justify-center transition-all',
    'rounded-sm font-normal text-sm w-fit overflow-hidden',
    'whitespace-nowrap select-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2',
  ],
  {
    variant: {
      primary: 'bg-primary-bg text-primary-fg hover:bg-primary-bg/90',
      secondary: 'bg-secondary-bg text-secondary-fg hover:bg-secondary-bg/90',
      outline: 'bg-bg text-fg border hover:bg-muted-bg/80',
    },
    size: {
      sm: 'h-6 px-2 text-xs gap-1 [&_.icon]:size-3',
      md: 'h-7 px-2.5 text-sm gap-1 [&_.icon]:size-4',
      lg: 'h-9 px-3 text-base gap-2 [&_.icon]:size-6',
    },
  },
);

export interface BadgeProps extends React.ComponentPropsWithRef<'span'>, BakeIngredient<typeof bake> {
  asChild?: boolean;
}

export const Badge = ({
  variant = 'primary',
  size = 'sm',
  asChild = false,
  className,
  children,
  ...props
}: BadgeProps) => {
  const Component = asChild ? Slot.Root : 'span';

  return (
    <Component
      className={bake({ variant, size, className })}
      {...props}
    >
      {children}
    </Component>
  );
};
