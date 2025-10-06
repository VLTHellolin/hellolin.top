import type { Projects } from '@/types/content';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Badge } from './Badge';
import { Icon } from './Icon';
import { Tag } from './Tag';

export interface ProjectCardProps {
  project: Projects;
}

export const ProjectCard = ({
  project,
}: ProjectCardProps) => {
  return (
    <NextLink href={project.link} target='_blank' rel='nofollow noreferrer noopener'>
      <div className='border rounded-sm bg-bg p-6 text-fg transition-colors duration-350 [&:hover_.enter-arrow]:translate-x-4px hover:bg-secondary-bg/30'>
        <div className='flex flex-col gap-4 sm:flex-row'>
          {project.image && (
            <div className='max-w-15rem sm:shrink-0'>
              <NextImage className='rounded-sm object-cover' src={project.image.src} blurDataURL={project.image.blurDataURL} alt={project.name} width={1200} height={630} />
            </div>
          )}
          <div className='flex grow flex-col gap-1'>
            <h3 className='text-lg font-medium'>
              {project.name}
              {project.archived && (
                <Badge variant='none' size='sm' className='bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'>
                  <Icon className='i-lucide-archive' />
                  Archived
                </Badge>
              )}
            </h3>
            <p className='pb-1 text-sm text-muted-fg'>{project.description}</p>
            <div className='flex flex-wrap gap-2 pb-1'>
              {project.tags?.map(tag => <Tag key={tag} name={tag} />)}
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
