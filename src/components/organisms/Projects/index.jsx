/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, {useContext, forwardRef} from 'react';
import classNames from 'classnames';
import {SectionTitle} from 'components/molecules';
import {SectionVariants} from 'components/molecules/SectionTitle';
import {RoundedButton} from 'components/atoms';
import {LanguageContext} from 'contexts';
import ProjectCard from 'components/molecules/ProjectCard';
import Decorations from 'components/decorations';

const Projects = forwardRef(({title, content, className}, ref) => {
  const language = useContext(LanguageContext);
  const {items} = content;

  const bulletsClasses = 'w-32 h-32 text-indigo-300 md:w-40 md:h-40';

  return (
    <section
      id="my-work"
      className={className}
      ref={section => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(section);
          } else {
            ref.current = section;
          }
        }
      }}>
      <SectionTitle variant={SectionVariants.CENTER}>{title}</SectionTitle>
      <div className="relative grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        <Decorations.Bullets
          className={classNames(
            'absolute -top-8 -left-0 lg:-left-12 md:-top-9 -z-10',
            bulletsClasses
          )}
        />
        <Decorations.Bullets
          className={classNames(
            'absolute -bottom-8 -right-0 lg:-right-12 md:-bottom-9 -z-10',
            bulletsClasses
          )}
        />
        {items.map((item, index) => (
          <ProjectCard
            data={item}
            key={index}
            className="h-full transition-all transform hover:shadow-lg hover:scale-110 focus-within:scale-110 focus-within:shadow-lg"
          />
        ))}
      </div>

      {/* <div className="flex justify-center mt-8">
        <RoundedButton as="a" href="https://github.com/itsfaqih">
          {language.value === 'en' ? 'See more' : 'Lihat Selengkapnya'}
        </RoundedButton>
      </div> */}
    </section>
  );
});

export default Projects;
