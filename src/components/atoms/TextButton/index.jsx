/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

export default function TextButton({children, className, onClick}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'inline-flex items-center text-gray-600 focus:outline-none focus:ring-2 ring-indigo-500 rounded-lg ring-offset-2',
        className
      )}>
      {children}
    </button>
  );
}
