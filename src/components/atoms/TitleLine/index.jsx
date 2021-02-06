/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

export default function TitleLine({className, ...props}) {
  return (
    <svg
      className={classNames('w-20 h-1 text-indigo-600 mt-3', className)}
      fill="currentColor">
      <rect height="100%" {...props} />
    </svg>
  );
}
