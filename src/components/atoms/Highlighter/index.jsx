/* eslint-disable react/prop-types */
import React, {HTMLAttributes} from 'react';
import classNames from 'classnames';

export default function Highlighter({className, rad, ...props}) {
  return (
    <svg
      className={classNames(
        'absolute w-full-2 text-indigo-200 -z-10 -left-1',
        className
      )}
      fill="currentColor">
      <rect width="100%" height="100%" rx={rad} ry={rad} {...props} />
    </svg>
  );
}
