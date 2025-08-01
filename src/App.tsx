import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {<Hero />}
      {<About /> }
      {<Experience /> }
      {<Skills />}
      {<Projects />}
      {<Contact />}
    </>
  );
}

export default App;
