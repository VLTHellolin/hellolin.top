import type React from 'react';
import { range } from 'es-toolkit';
import NextLink from 'next/link';
import { Button, type ButtonProps } from './Button';
import { Icon } from './Icon';

interface PaginationLinkProps extends React.ComponentPropsWithRef<typeof NextLink> {
  isActive?: boolean;
  size?: ButtonProps['size'];
}

const PaginationLink = ({
  isActive = false,
  size = 'icon',
  className,
  children,
  ...props
}: PaginationLinkProps) => {
  return (
    <Button
      asChild
      size={size}
      variant={isActive ? 'outline' : 'ghost'}
      className={className}
    >
      <NextLink {...props}>
        {children}
      </NextLink>
    </Button>
  );
};

const PaginationEllipses = () => {
  return (
    <span
      aria-label='More Pages'
      aria-hidden
      className='size-8 flex items-center justify-center'
    >
      <Icon className='i-lucide-ellipsis' />
    </span>
  );
};

export interface PaginationProps {
  baseUrl: string;
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({
  baseUrl,
  currentPage,
  totalPages,
}: PaginationProps) => {
  const getUrl = (page: number) => `${baseUrl}?page=${page}`;

  const rangeLeft = Math.max(1, currentPage - 2);
  const rangeRight = Math.min(totalPages, currentPage + 2);

  return (
    <div
      className='mx-auto w-full flex justify-center'
      aria-label='pagination'
      role='navigation'
    >
      <ul className='flex flex-row flex-wrap items-center gap-2'>
        {currentPage !== 1 && (
          <li>
            <PaginationLink
              aria-label='Previous Page'
              href={`${baseUrl}?page=${currentPage - 1}`}
              size='md'
              className='gap-1 px-2'
            >
              <Icon className='i-lucide-arrow-left' />
              Previous
            </PaginationLink>
          </li>
        )}

        {rangeLeft !== 1 && (
          <li>
            <PaginationEllipses />
          </li>
        )}

        {range(rangeLeft, rangeRight).map(page => (
          <li key={page}>
            <PaginationLink
              href={getUrl(page)}
              isActive={page === currentPage}
              className='text-sm'
            >
              {page}
            </PaginationLink>
          </li>
        ))}

        {rangeRight !== totalPages && (
          <li>
            <PaginationEllipses />
          </li>
        )}

        {currentPage !== totalPages && (
          <li>
            <PaginationLink
              aria-label='Next Page'
              href={`${baseUrl}?page=${currentPage + 1}`}
              size='md'
              className='gap-1 px-2'
            >
              Next
              <Icon className='i-lucide-arrow-right' />
            </PaginationLink>
          </li>
        )}
      </ul>
    </div>
  );
};
