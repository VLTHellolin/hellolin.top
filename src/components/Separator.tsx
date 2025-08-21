import type React from 'react';
import { Separator as SeparatorPrimitive } from 'radix-ui';
import { type BakeIngredient, createRecipe } from '@/utils/recipe';

const bake = createRecipe(
  'bg-muted-border shrink-0 horizontal:h-1px vertical:w-1px',
  {
    size: {
      sm: 'horizontal:w-4 vertical:h-4',
      md: 'horizontal:w-6 vertical:h-6',
      lg: 'horizontal:w-full vertical:h-full',
    },
  },
);

export type SeparatorProps = React.ComponentPropsWithRef<typeof SeparatorPrimitive.Root> & BakeIngredient<typeof bake>;

export const Separator = ({
  className,
  size = 'lg',
  decorative = true,
  ...props
}: SeparatorProps) => {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      className={bake({ size, className })}
      {...props}
    />
  );
};
