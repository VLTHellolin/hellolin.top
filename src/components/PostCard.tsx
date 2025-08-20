import type { Blog } from '@content/index';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Icon } from './Icon';

export interface PostCardProps {
  post: Blog;
}

export const PostCard = ({
  post,
}: PostCardProps) => {
  return (
    <div className='border rounded-lg bg-bg p-6 text-fg transition-colors duration-350 [&:hover_.enter-arrow]:translate-x-4px hover:bg-muted-bg/80'>
      <NextLink href={post.permalink}>
        <div className='flex flex-col gap-4 sm:flex-row'>
          {post.image && (
            <div className='max-w-15rem sm:shrink-0'>
              <NextImage className='rounded-sm object-cover' src={post.image.src} alt={post.title} width={1200} height={630} />
            </div>
          )}
          <div className='flex grow flex-col gap-1'>
            <h3 className='text-lg font-medium'>{post.title}</h3>
            <p className='pb-1 text-sm text-muted-fg'>{post.description}</p>
          </div>
          <div className='hidden items-center sm:flex sm:pr-4px'>
            <Icon className='enter-arrow i-lucide-arrow-right transition-transform' />
          </div>
        </div>
      </NextLink>
    </div>
  );
};
