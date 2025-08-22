import { Icon } from './Icon';
import { Link } from './Link';
import { Separator } from './Separator';
import { SocialButton } from './SocialButton';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-2 py-6 sm:flex-row sm:justify-between'>
      <div className='flex flex-wrap justify-center text-sm text-muted-fg'>
        <span className='lt-md:mb-1'>
          &copy; 2023-2025 hellolin.
        </span>
        <Separator className='mx-2 hidden sm:block' orientation='vertical' size='sm' />
        <div className='block w-full sm:hidden' />
        <div className='flex items-center gap-1'>
          <Icon label='Next.js Version' className='i-simple-icons-nextdotjs size-3.5' />
          <code>v{process.env.NEXT_VERSION}</code>
        </div>
        <Separator className='mx-2' orientation='vertical' size='sm' />
        <div className='flex items-center gap-1'>
          <Icon label='Git Commit' className='i-lucide-git-branch size-3.5' />
          <Link href={process.env.GIT_COMMIT_URL} external variant='muted'>
            <code>
              {process.env.GIT_COMMIT_HASH} @ {process.env.GIT_BRANCH}
            </code>
          </Link>
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-2'>
        <SocialButton href='https://github.com/VLTHellolin/hellolin.top' external label='GitHub' icon='i-lucide-github' />
        <SocialButton href='/rss.xml' label='RSS Feed' icon='i-lucide-rss' />
      </div>
    </footer>
  );
};
