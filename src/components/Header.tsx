import { Link } from './Link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Blog' },
  { href: '/papers', label: 'Academic' },
  { href: '/projects', label: 'Projects' },
];

export const Header = () => {
  return (
    <header>
      <div className='mx-auto flex items-center justify-between gap-4 py-4'>
        <Link href='/' className='flex shrink-0 items-center justify-center'>
          <span className='h-full text-lg font-medium'>
            VLTHellolin
          </span>
        </Link>
      </div>
      <div className='flex items-center gap-2 sm:gap-4'>
        <nav className='hidden items-center gap-4 sm:flex'>
          {navLinks.map(item => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
