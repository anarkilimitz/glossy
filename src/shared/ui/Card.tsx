import type { HTMLAttributes, ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'className'>;

export function Card({ children, interactive = false, className, ...props }: CardProps) {
  const classes = ['card', interactive && 'card--interactive', className].filter(Boolean).join(' ');

  return <div className={classes} {...props}>{children}</div>;
}
