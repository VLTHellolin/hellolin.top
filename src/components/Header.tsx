import { Link } from './Link';
import { SocialButton } from './SocialButton';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
];

export const Header = () => {
  return (
    <header className='sticky top-0 z-100 bg-bg/60 backdrop-blur-10px backdrop-saturate-180'>
      <div className='mx-auto max-w-4xl flex items-center justify-between gap-4 px-2 pb-2 pt-4'>
        <nav className='flex items-center gap-5 text-sm'>
          <Link href='/' className='hidden shrink-0 items-center justify-center sm:flex'>
            <span className='h-full translate-y--1px text-lg font-medium'>
              VLTHellolin
            </span>
          </Link>
          {navLinks.map(item => (
            <Link href={item.href} key={item.label} variant='muted'>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className='w-auto' />
        <div className='flex items-center justify-center gap-2'>
          <SocialButton href='/rss.xml' label='RSS Feed' icon='i-lucide-rss' />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
