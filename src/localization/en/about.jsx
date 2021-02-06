/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {Icon} from '@iconify/react';
import {HighlightedTextIcon} from 'components/molecules';
import reactIcon from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';

const Text = () => (
  <span className="text-xl">
    As a Front End Developer, I really like creating reusable code, implementing
    visual elements that UI/UX team make and ensuring web design is optimized.
  </span>
);

const about = {
  text: <Text />,
};

export default about;
