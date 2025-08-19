import NextLink from 'next/link';
import { Button, type ButtonProps } from './Button';
import { Icon } from './Icon';

export interface SocialButtonProps {
  variant?: ButtonProps['variant'];
  href: string;
  external?: boolean;
  label: string;
  icon: string;
}

export const SocialButton = ({
  variant = 'ghost',
  href,
  external = false,
  label,
  icon,
}: SocialButtonProps) => {
  return (
    <Button variant={variant} size='icon' asChild>
      <NextLink href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>
        <Icon label={label} className={icon} />
      </NextLink>
    </Button>
  );
};
