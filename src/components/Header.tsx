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
    <header className='sticky top-0 z-100 border-b-1px border-muted-border bg-bg/60 backdrop-blur-10px backdrop-saturate-180 xl:border-none'>
      <div className='flex items-center justify-between gap-4 pb-2 pt-4'>
        <nav className='hidden items-center gap-5 text-sm sm:flex'>
          <Link href='/' className='flex shrink-0 items-center justify-center'>
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
