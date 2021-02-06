/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import {MainMenu, TextSelect} from 'components/molecules';
import {Container} from 'components/atoms';

export default function Navigation({locale, sections, className}) {
  const languageOptions = [
    {label: 'English', value: 'en'},
    {label: 'Indonesia', value: 'id'},
  ];

  const selectedLanguage =
    languageOptions.find(option => option.value === locale.value) ||
    languageOptions[0];

  const setSelectedLanguage = option => {
    if (option.value === 'en' || option.value === 'id') {
      locale.change(option.value);
    }
  };

  return (
    <nav className={classNames('w-full', className)}>
      <Container className="flex justify-end">
        <MainMenu sections={sections} />
      </Container>
    </nav>
  );
}
