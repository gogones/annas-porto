/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import Icons from 'components/icons';

export default function TextSelectOption({
  children,
  active,
  selected,
  onClick,
}) {
  return (
    <li
      className={classNames(
        'py-4 px-8 sm:py-2 sm:px-4 w-60 sm:w-32 flex items-center cursor-pointer hover:bg-indigo-50',
        {
          'bg-indigo-50': active,
        }
      )}
      onClick={onClick}>
      {children}
      {selected && (
        <Icons.CheckRounded className="absolute text-indigo-500 w-7 h-7 sm:w-4 sm:h-4 right-4" />
      )}
    </li>
  );
}
