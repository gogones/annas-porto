/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import {HeaderText, TitleLine} from 'components/atoms';

export const SectionVariants = {
  LEFT: 'left',
  CENTER: 'center',
};

export default function SectionTitle({
  children,
  variant = SectionVariants.LEFT,
  lineProps,
}) {
  return (
    <HeaderText
      className={classNames('flex flex-col items-center', {
        'lg:flex-row': variant === SectionVariants.LEFT,
      })}>
      {children}
      <TitleLine
        className={classNames({
          'lg:ml-6 lg:mt-0': variant === SectionVariants.LEFT,
        })}
        {...lineProps}
      />
    </HeaderText>
  );
}
