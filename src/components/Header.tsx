import { Link } from './Link';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
];

export const Header = () => {
  return (
    <header className='sticky top-0 z-100 border-b-1px border-muted-border bg-bg/60 backdrop-blur-md xl:border-none'>
      <div className='flex items-center justify-between gap-4 pb-1 pt-4'>
        <Link href='/' className='flex shrink-0 items-center justify-center'>
          <span className='h-full text-lg font-medium'>
            VLTHellolin
          </span>
        </Link>
        <div className='w-auto' />
        <div className='flex items-center gap-2 sm:gap-4'>
          <nav className='hidden items-center gap-5 text-sm sm:flex'>
            {navLinks.map(item => (
              <Link href={item.href} key={item.label} variant='muted'>
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
