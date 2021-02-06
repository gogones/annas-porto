/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import {TextButton} from 'components/atoms';

export default function TextIconButton({text, icon, className, onClick}) {
  const Icon = React.cloneElement(icon, {
    className: classNames('w-4 h-4', icon.props.className),
  });
  return (
    <TextButton className={className} onClick={onClick}>
      <span className="pr-2">{text}</span>
      {Icon}
    </TextButton>
  );
}
