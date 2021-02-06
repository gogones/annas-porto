/* eslint-disable react/prop-types */
import {Container} from 'components/atoms';
import {
  About,
  Blogs,
  Contact,
  Header,
  Navigation,
  Projects,
  Skills,
} from 'components/organisms';
import React, {useRef} from 'react';

export default function Landing({data, locale, sections}) {
  const {header, about, projects, blogs, skills, contact} = data;
  const lowerSectionRef = useRef();

  return (
    <>
      <Navigation
        className="fixed z-10 top-8"
        locale={locale}
        sections={sections}
      />
      <Container className="pt-32">
        <div className="flex flex-wrap">
          <main className="w-full mt-12">
            <Header
              data={header.data}
              text={header.text}
              lowerSectionRef={lowerSectionRef}
            />
            <About
              title={sections.about}
              content={{
                text: about.text,
              }}
              className="pt-32 mt-24"
              ref={lowerSectionRef}
            />
            <Projects
              title={sections.projects}
              content={{
                items: projects.items,
              }}
              className="pt-12 mt-40"
            />
            {/* <Blogs
              title={sections.blogs}
              content={{items: blogs.items}}
              className="mt-12 pt-28"
            />
            <Skills
              title={sections.skills}
              content={{text: skills.text, items: skills.items}}
              className="pt-24 mt-28"
            /> */}
          </main>
          <footer className="w-full pt-20 pb-16 mt-32">
            <Contact
              title={sections.contact}
              content={{
                email: contact.email,
                socials: contact.socials,
              }}
            />
          </footer>
        </div>
      </Container>
    </>
  );
}
