/* eslint-disable react/prop-types */
import React from 'react';
import Icons from 'components/icons';
import {FullRoundButton} from 'components/atoms';

export default function MenuButton({isOpen = false, onClick, ...props}) {
  return (
    <FullRoundButton active={isOpen} {...props} label="Menu" onClick={onClick}>
      {isOpen ? (
        <Icons.Close className="w-6 h-6" />
      ) : (
        <Icons.Menu className="w-6 h-6" />
      )}
    </FullRoundButton>
  );
}
