import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = ['button', `button--${variant}`, `button--${size}`, className].filter(Boolean).join(' ');

  return <button className={classes} type={type} {...props}>{children}</button>;
}
