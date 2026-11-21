import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

export type IconButtonProps = {
  children: ReactNode;
  'aria-label': string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton({ children, size = 'medium', className, type = 'button', ...props }, ref) {
  const classes = ['icon-button', `icon-button--${size}`, className].filter(Boolean).join(' ');

  return <button ref={ref} className={classes} type={type} {...props}>{children}</button>;
});
