/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

export default function TextBox({placeholder, className, value, onChange}) {
  return (
    <input
      type="text"
      className={classNames(
        'py-2.5 placeholder-gray-500 bg-transparent',
        className
      )}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
