import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className='prj-info'>
          <ul id='list'>
            <li>Project 1: <a href="/projects/AgendaDeContactos/indexContact.html">Contacts list</a></li>
            <li>Project 2:  <a href="/projects/AgendaDeTareas/indexTasks.html">Task list</a></li>
            <li>Project 3: <a href="/projects/PokeApiApp/indexPoke.html">PokeApi web</a></li>
          </ul>
      </div>
    </section>
  );
};

export default Projects;
