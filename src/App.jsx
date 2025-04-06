import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

const App = () => {
  return (
    <div className="App">
      <main>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
