import type React from 'react';
import clsx from 'clsx';

export interface IconProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  label?: string;
}

export const Icon = ({
  label,
  className,
  ...props
}: IconProps) => {
  return (
    <div className={clsx('icon', className)} title={label} aria-label={label} aria-hidden={!label} {...props}>
      {label && <label className='sr-only'>{label}</label>}
    </div>
  );
};
