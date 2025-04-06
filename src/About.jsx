import React from 'react';


const About = () => {
  return (
      <section id="about">
        <div id='abt_title' >
          #About
        </div>
        <div id='abt_box'>
          <br />
          <div className='abt-info' id='abt_info'>
            <p>Passion for technology and continuous
            continuous improvement, specialized in identifying needs and designing
            design efficient software solutions. Committed
            to constant learning and effective collaboration in multidisciplinary
            multidisciplinary teams, with a focus on process optimization and software
            optimization and software quality.
            </p>
            <br />
            <p>
              I have experience in software development,
              user interface design and data analysis,
              I am committed to creating innovative and effective solutions
              and effective solutions that meet the requirements requested of me. 
            </p>
          </div>
        </div>
        <br />
        <div id='abt_title'>
          Technologies
        </div>
        <div id='abt_technologies'>
            <p>Python, SQL, NoSQL, Java, Javascript, React, React native, Django</p>
        </div>
      </section>
  );
};

export default About;
