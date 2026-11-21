import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'body-large'
  | 'body-small'
  | 'caption';

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T;
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'className'>;

export function Typography<T extends ElementType = 'span'>({
  as,
  variant = 'body',
  children,
  className,
  ...props
}: TypographyProps<T>) {
  const Component = (as ?? 'span') as ElementType;
  const classes = ['typography', `typography--${variant}`, className].filter(Boolean).join(' ');

  return <Component className={classes} {...props}>{children}</Component>;
}
