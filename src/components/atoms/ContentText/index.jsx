/* eslint-disable react/prop-types */
import React, {ReactNode} from 'react';
import classNames from 'classnames';

export default function ContentText({children, className}) {
  return (
    <p
      className={classNames(
        'text-center text-gray-700 leading-extra-loose',
        className
      )}>
      {children}
    </p>
  );
}
