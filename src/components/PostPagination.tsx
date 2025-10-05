import type { Blog } from '@content/index';
import NextLink from 'next/link';
import { Button } from './Button';
import { Icon } from './Icon';

export interface PostPaginationProps {
  previous: Blog | null;
  next: Blog | null;
}

export const PostPagination = ({
  previous,
  next,
}: PostPaginationProps) => {
  return (
    <nav className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      <Button variant='outline' size='lg' disabled={!previous} className='h-15 w-full'>
        <NextLink href={previous?.permalink ?? '#'} className='w-full flex items-center justify-start gap-2 [&_.icon]:size-4 [&:hover_.enter-arrow]:translate-x--2px'>
          <Icon className='enter-arrow i-lucide-arrow-left transition-transform' />
          <div className='flex flex-col items-start text-wrap'>
            <span className='text-left text-xs text-muted-fg'>Previous Post</span>
            <span className='text-ellipsis text-left text-sm text-fg'>
              {previous?.title ?? 'No older posts!'}
            </span>
          </div>
        </NextLink>
      </Button>
      <Button variant='outline' size='lg' disabled={!next} className='h-15 w-full'>
        <NextLink href={next?.permalink ?? '#'} className='w-full flex items-center justify-end gap-2 [&_.icon]:size-4 [&:hover_.enter-arrow]:translate-x-2px'>
          <div className='flex flex-col items-end text-wrap'>
            <span className='text-right text-xs text-muted-fg'>Next Post</span>
            <span className='text-ellipsis text-right text-sm text-fg'>
              {next?.title ?? 'No newer posts!'}
            </span>
          </div>
          <Icon className='enter-arrow i-lucide-arrow-right transition-transform' />
        </NextLink>
      </Button>
    </nav>
  );
};
