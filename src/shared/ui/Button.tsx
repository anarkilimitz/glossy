import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonElementProps = ButtonBaseProps & {
  as?: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorButtonProps = ButtonBaseProps & {
  as: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonElementProps | AnchorButtonProps;

function omitButtonProps(props: ButtonProps) {
  const elementProps = { ...props } as Record<string, unknown>;
  ['as', 'children', 'variant', 'size', 'className'].forEach((key) => delete elementProps[key]);
  return elementProps;
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'medium', className } = props;
  const classes = ['button', `button--${variant}`, `button--${size}`, className].filter(Boolean).join(' ');

  if (props.as === 'a') {
    return <a className={classes} {...omitButtonProps(props) as AnchorHTMLAttributes<HTMLAnchorElement>}>{children}</a>;
  }

  const buttonProps = omitButtonProps(props) as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={classes} type={buttonProps.type ?? 'button'} {...buttonProps}>{children}</button>;
}
