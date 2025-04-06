import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div id='btn_group'> 
          <a id='btn_nav' href="#home">Home</a>
          <a id='btn_nav' href="#about">About me</a>
          <a id='btn_nav' href="#projects">Projects</a>
          <a id='btn_nav' href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
