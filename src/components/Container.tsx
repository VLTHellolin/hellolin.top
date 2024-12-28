import type React from 'react';

export interface ContainerProps {
  children?: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className='flex w-full h-full justify-center item-center'>
      <div className='flex flex-col justify-center relative w-2/5 min-w-[400px] max-w-[800px]'>{children}</div>
    </div>
  );
};
