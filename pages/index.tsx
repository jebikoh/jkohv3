import * as React from 'react';
import About from '../src/About';
import Landing from '../src/Landing';
import Projects from '../src/Projects';
import Contact from '../src/Contact';

export default function Index() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
