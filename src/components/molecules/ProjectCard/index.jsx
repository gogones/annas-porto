/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import classNames from 'classnames';
import {ContentTitle} from 'components/atoms';
import Icons from 'components/icons';
import {LanguageContext} from 'contexts';

export default function ProjectCard({data, className}) {
  const language = useContext(LanguageContext);
  const {title, tech, role, image, description, type, url} = data;

  return (
    <article
      className={classNames(
        'flex flex-col bg-white rounded-xl shadow py-4 px-6 items-center',
        className
      )}>
      <ContentTitle>{title}</ContentTitle>
      <img src={image} />
      {/* <p className="mt-2 mb-8 text-sm text-gray-700">{description}</p> */}
      {/* <div className="flex items-center justify-between mt-auto">
        <a
          className="font-medium text-indigo-400 rounded-lg hover:text-indigo-500 focus:outline-none focus:ring-2 ring-indigo-500 ring-offset-2 focus:text-indigo-500"
          href={url}>
          {language.value === 'en' ? 'Details' : 'Lihat'}
        </a>
      </div> */}
    </article>
  );
}
