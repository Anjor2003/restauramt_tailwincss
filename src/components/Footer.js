import React from 'react';

// Importamos logo 
import LogoWhite from '../assets/img/logo-white.svg';


const Footer = () => {
  return <footer className='bg-primary py-12'>
    <div className="container mx-auto text-white flex justify-between text-base gap-x-9">
      {/* logo */}
      <a href="/">
       <img src={LogoWhite} alt="logo Blanco" />
      </a>
      Copyright &copy; 2023. <br /> All Rights reserved.
    </div>
  </footer>;
};

export default Footer;
