import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { Container } from './Container';

export type SectionProps = {
  children: ReactNode;
  as?: ElementType;
  spacing?: 'none' | 'small' | 'medium' | 'large';
  background?: 'default' | 'muted' | 'surface';
  contained?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'className'>;

export function Section({
  children,
  as: Component = 'section',
  spacing = 'medium',
  background = 'default',
  contained = true,
  className,
  ...props
}: SectionProps) {
  const classes = ['section', `section--spacing-${spacing}`, `section--background-${background}`, className]
    .filter(Boolean)
    .join(' ');

  return <Component className={classes} {...props}>{contained ? <Container>{children}</Container> : children}</Component>;
}
