import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar activeSection={activeSection} />
        <main>
          <section id="hero">
            <Hero onSetActive={() => handleSetActive('hero')} />
          </section>
          <section id="about">
            <About onSetActive={() => handleSetActive('about')} />
          </section>
          <section id="projects">
            <Projects onSetActive={() => handleSetActive('projects')} />
          </section>
          <section id="skills">
            <Skills onSetActive={() => handleSetActive('skills')} />
          </section>
          <section id="contact">
            <Contact onSetActive={() => handleSetActive('contact')} />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;