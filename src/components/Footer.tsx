import { SocialButton } from './SocialButton';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-2 py-6 sm:flex-row sm:justify-between'>
      <div className='flex flex-wrap justify-center text-sm text-muted-fg'>
        &copy; 2023-2025 hellolin. All rights reserved.
      </div>
      <div className='flex flex-wrap justify-center gap-2'>
        <SocialButton href='https://github.com/VLTHellolin/hellolin.top' external label='GitHub' icon='i-lucide-github' />
        <SocialButton href='/rss.xml' label='RSS Feed' icon='i-lucide-rss' />
      </div>
    </footer>
  );
};
