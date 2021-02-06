/* eslint-disable react/prop-types */
import React, {ReactElement} from 'react';
import classNames from 'classnames';
import {HighlightedText} from 'components/atoms';

export default function HighlightedTextIcon({
  icon,
  children,
  className,
  ...props
}) {
  const Icon = React.cloneElement(icon, {
    className: 'w-7 h-7 pr-2 self-center',
  });

  return (
    <HighlightedText
      {...props}
      className={classNames(
        'inline-flex items-baseline text-gray-800 font-medium transition-all transform hover:-translate-y-1 hover:shadow-xl',
        className
      )}>
      {Icon}
      {children}
    </HighlightedText>
  );
}
