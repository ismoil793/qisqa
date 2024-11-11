import React, { FC } from 'react';
import Link from 'next/link';

interface LinkButtonProps {
  path: string;
  className: string;
  children: React.ReactNode;
}

const LinkButton: FC<LinkButtonProps> = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      className={`py-2 px-4 rounded bg-opacity-20 bg-black flex items-center justify-center ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
