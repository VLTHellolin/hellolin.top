import type React from 'react';
import { Slot } from 'radix-ui';
import { type BakeIngredient, createRecipe } from '@/utils/recipe';

const bake = createRecipe(
  [
    'relative inline-flex',
    'shrink-0 [&_.icon]:shrink-0 outline-none',
    'items-center justify-center transition-all',
    'rounded-sm font-medium line-height-relaxed',
    'whitespace-nowrap select-none cursor-pointer',
    'disabled:opacity-70 disabled:pointer-events-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2',
  ],
  {
    variant: {
      primary: 'bg-primary-bg text-primary-fg hover:bg-primary-bg/90',
      secondary: 'bg-secondary-bg text-secondary-fg hover:bg-secondary-bg/80',
      outline: 'bg-bg text-fg border hover:bg-secondary-bg/30',
      ghost: 'text-fg hover:bg-secondary-bg/30',
    },
    size: {
      sm: 'h-9 min-w-8 px-3.5 text-sm gap-1.5 [&_.icon]:size-3.5',
      md: 'h-10 min-w-9 px-4 text-sm gap-2 [&_.icon]:size-4',
      lg: 'h-11 min-w-11 px-5 text-base gap-3 [&_.icon]:size-5',
      xl: 'h-13 min-w-13 px-5 text-lg gap-3 [&_.icon]:size-6',
      icon: 'size-9 [&_.icon]:size-4',
    },
  },
);

export interface ButtonProps extends React.ComponentPropsWithRef<'button'>, BakeIngredient<typeof bake> {
  asChild?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  asChild = false,
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot.Root : 'button';

  return (
    <Component
      className={bake({ variant, size, className })}
      type={type}
      {...props}
    >
      {children}
    </Component>
  );
};
