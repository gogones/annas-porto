/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

export default function Avatar({src, alt, className}) {
  return (
    <img
      src={src}
      alt={alt}
      width="auto"
      height="auto"
      className={classNames(
        'object-cover border-4 border-indigo-400 rounded-3xl w-28 h-28 md:w-60 md:h-60 shadow-xl',
        className
      )}
    />
  );
}
