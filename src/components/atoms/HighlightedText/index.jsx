/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

export default function HighlightedText({
  children,
  as = 'span',
  href,
  className,
}) {
  const classes = classNames(
    'px-3 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 ring-indigo-500',
    className
  );
  if (as === 'span') {
    return <span className={classes}>{children}</span>;
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
