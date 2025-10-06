import type React from 'react';
import { clsx } from 'clsx';
import { capitalize } from 'es-toolkit';
import { callouts, type CalloutType } from '@/constants/callouts';
import { Icon } from './Icon';

export interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export const Callout = ({
  type = 'info',
  title,
  children,
}: CalloutProps) => {
  const callout = callouts[type];

  return (
    <div className={clsx(callout.color, 'not-prose relative mb-3 flex flex-row items-start justify-start gap-3 border-1 rounded-md p-4')}>
      <div className='size-4 flex shrink-0'>
        <Icon className={callout.icon} />
      </div>
      <div className='flex flex-col gap-2'>
        <span className='font-medium'>{title || capitalize(type)}</span>
        <div className='text-base leading-7'>
          {children}
        </div>
      </div>
    </div>
  );
};
