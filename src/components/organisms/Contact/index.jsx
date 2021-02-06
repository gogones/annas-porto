/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import {FullRoundButton, Highlighter} from 'components/atoms';
import Icons from 'components/icons';
import React, {forwardRef} from 'react';

const Contact = forwardRef(({title, content}, ref) => {
  const {email, socials} = content;

  return (
    <section
      id="contact"
      ref={section => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(section);
          } else {
            ref.current = section;
          }
        }
      }}>
      <h2 className="flex text-xl text-center md:text-left font-bold text-gray-600 md:justify-start md:whitespace-pre md:text-3xl whitespace-normal">
        {title}
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <a
          href={`mailto:${email}`}
          className="relative mt-6 text-xl md:text-4xl font-bold text-gray-800 rounded-lg focus:outline-none focus:ring-2 ring-indigo-500 ring-offset-8">
          {email}
          <Highlighter className="h-4 bottom-0.5" rad={8} />
        </a>
        <div className="flex items-center mt-8 md:mt-0">
          <FullRoundButton as="a" href={socials.linkedin} label="Linkedin">
            <Icons.Linkedin className="w-6" />
          </FullRoundButton>
          <FullRoundButton
            as="a"
            href={socials.github}
            className="mx-6"
            label="Github">
            <Icons.Github className="w-6" />
          </FullRoundButton>
        </div>
      </div>
    </section>
  );
});

export default Contact;
