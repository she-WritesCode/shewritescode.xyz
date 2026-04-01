'use client';

import React, { ReactNode } from 'react';

interface ObfuscateProps {
  email?: string;
  href?: string;
  headers?: {
    subject?: string;
    body?: string;
  };
  target?: string;
  rel?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * A generic, React 19-compatible component to obfuscate contact links.
 * Replaces the unmaintained react-obfuscate library.
 */
export const Obfuscate: React.FC<ObfuscateProps> = ({
  email,
  href,
  headers,
  target,
  rel,
  className,
  children,
}) => {
  const generateLink = () => {
    if (href) return href;
    if (email) {
      let mailto = `mailto:${email}`;
      if (headers) {
        const params = new URLSearchParams();
        if (headers.subject) params.append('subject', headers.subject);
        if (headers.body) params.append('body', headers.body);
        const queryString = params.toString();
        if (queryString) {
          mailto += `?${queryString.replace(/\+/g, '%20')}`;
        }
      }
      return mailto;
    }
    return '#';
  };

  return (
    <a
      href={generateLink()}
      target={target}
      rel={rel}
      className={className}
    >
      {children || email || href}
    </a>
  );
};
