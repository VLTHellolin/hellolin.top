import type React from 'react';

export interface ContainerProps {
  children?: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className='container relative flex flex-col gap-5 mx-auto mt-6 mb-10 h-full w-1/3 min-w-[400px] max-w-[700px]'>{children}</div>;
};
