/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

export default function Overlay({
  contentRef,
  classOnOpen,
  classOnClose,
  open = false,
  className,
}) {
  if (open) {
    if (contentRef.current) disableBodyScroll(contentRef.current);
  } else clearAllBodyScrollLocks();

  return (
    <svg
      className={classNames(
        'h-full top-0 right-0 transition-all duration-1000 z-10 fixed',
        {
          [classOnClose]: !open,
          [classOnOpen]: open,
        },
        className
      )}
      fill="currentColor">
      <rect width="100%" height="100%" />
    </svg>
  );
}
