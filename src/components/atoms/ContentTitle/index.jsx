/* eslint-disable react/prop-types */
import React, {ReactNode} from 'react';
import classNames from 'classnames';

export default function ContentTitle({children, className}) {
  return (
    <h3 className={classNames('text-sm font-bold text-gray-800', className)}>
      {children}
    </h3>
  );
}
