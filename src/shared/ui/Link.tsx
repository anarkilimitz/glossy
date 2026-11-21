import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children' | 'className'>;

function isExternalUrl(to: string) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(to);
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, children, className, external, target, rel, ...props }, ref) {
  const shouldUseExternal = external ?? isExternalUrl(to);
  const classes = ['link', className].filter(Boolean).join(' ');

  if (shouldUseExternal) {
    const externalRel = target === '_blank' ? rel ?? 'noreferrer' : rel;
    return <a ref={ref} className={classes} href={to} target={target} rel={externalRel} {...props}>{children}</a>;
  }

  return <RouterLink ref={ref} className={classes} to={to} target={target} {...props}>{children}</RouterLink>;
});
