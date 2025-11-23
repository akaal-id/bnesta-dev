import React from 'react';

type Props = (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
) & {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className, ...rest }: Props) {
  // If href present, render an anchor
  if ((rest as any).href) {
    const { href, ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a className={className} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
