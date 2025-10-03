import type { Blog } from '@content/index';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { formatDate } from '@/utils/date';
import { getPostAuthors } from '@/utils/posts';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { Icon } from './Icon';
import { Separator } from './Separator';

export interface PostCardProps {
  post: Blog;
}

export const PostCard = async ({
  post,
}: PostCardProps) => {
  return (
    <NextLink href={post.permalink}>
      <div className='border rounded-md bg-bg p-6 text-fg transition-colors duration-350 [&:hover_.enter-arrow]:translate-x-4px hover:bg-secondary-bg/30'>
        <div className='flex flex-col gap-4 sm:flex-row'>
          {post.image && (
            <div className='max-w-15rem sm:shrink-0'>
              <NextImage className='rounded-sm object-cover' src={post.image.src} blurDataURL={post.image.blurDataURL} alt={post.title} width={1200} height={630} />
            </div>
          )}
          <div className='flex grow flex-col gap-1'>
            <h3 className='text-lg font-medium'>{post.title}</h3>
            <p className='pb-1 text-sm text-muted-fg'>{post.description}</p>
            <div className='flex flex-wrap gap-2 pb-1'>
              {post.tags?.map(tag => (
                <Badge variant='secondary' size='sm' key={tag}>
                  <Icon className='i-lucide-hash' />
                  {tag}
                </Badge>
              ))}
            </div>
            <div className='flex flex-wrap items-center gap-2 text-xs text-muted-fg'>
              {post.authors.length !== 0 && (
                <>
                  {(await getPostAuthors(post.authors)).map(author => (
                    <div className='flex items-center gap-1' key={author.name}>
                      <Avatar className='size-4.5' image={author.avatar} fallback={author.name} />
                      <span>{author.name}</span>
                    </div>
                  ))}
                  <Separator orientation='vertical' size='sm' />
                </>
              )}
              <span>{formatDate(post.date)}</span>
              <Separator orientation='vertical' size='sm' />
              <span className='flex items-center gap-1'>
                <Icon className='i-lucide-clock size-3.75' />
                {post.metadata.readingTime} min{post.metadata.readingTime > 1 && 's'}
              </span>
            </div>
          </div>
          <div className='hidden items-center sm:flex sm:pr-4px'>
            <Icon className='enter-arrow i-lucide-arrow-right transition-transform' />
          </div>
        </div>
      </div>
    </NextLink>
  );
};
