import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ProfileImage from '../assets/Profile.webp';
import { Link } from 'react-router-dom'; 
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h3 className="text-3xl font-bold text-lime-400">KULD<span className="text-white">EE</span>P</h3>
        
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AiOutlineClose size={30} className="text-lime-400" />
            ) : (
              <AiOutlineMenu size={30} className="text-lime-400" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className={`lg:flex space-x-8 text-sm uppercase hidden`}>
          <li className="text-lime-400 cursor-pointer">Home</li>
          <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/about">About</Link>
          </li>
          <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/projects">Projects</Link>
          </li>
          <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/services">Services</Link>
          </li>
          <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/contacts">Contact</Link>
    </li>
        </ul>
        
        <button className="hidden lg:block text-white border border-lime-400 px-6 py-2 text-black rounded-lg text-sm">
           <span>
    <a href="https://wa.me/918822892994?text=Hi,%20Kuldeep...%20I%20would%20like%20to%20chat%20with%20you!" target="_blank" rel="noopener noreferrer">
      Let’s Talk
    </a>
  </span>
        </button>
      </nav>

    {/* Mobile Menu with "Let’s Talk" Button */}
{menuOpen && (
  <ul className="flex flex-col space-y-4 text-center bg-black text-white uppercase text-sm py-4 lg:hidden">
    <li className="text-lime-400 cursor-pointer">Home</li>
      <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/about">About</Link>
          </li>
     <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/projects">Projects</Link>
          </li>
    <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/services">Services</Link>
          </li>
          <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/contacts">Contact</Link>
    </li>
    <li>
      <button className="border border-lime-400 px-6 py-2 text-white rounded-lg text-sm mt-2">
              <span>
    <a href="https://wa.me/918822892994?text=Hi,%20Kuldeep...%20I%20would%20like%20to%20chat%20with%20you!" target="_blank" rel="noopener noreferrer">
      Let’s Talk
    </a>
  </span>
      </button>
    </li>
  </ul>
)}
{/* Main Content */}
<div className="flex flex-col-reverse lg:flex-row items-center px-5 lg:px-5 mt-10 lg:mt-20">
  {/* Left Content */}
  <div className="text-center lg:px-56 lg:text-left">
    <p className="uppercase text-sm tracking-wide m-3">
      Currently Available for Job and Freelance Projects Worldwide
    </p>
    <h1 className="text-5xl font-bold mt-4">
      Hi, I'm <span className="text-lime-400">Kuldeep Gogoi</span>
    </h1>
    <h2 className="text-4xl font-bold mt-2">
      A Passionate <span className="text-lime-400">Web & App Developer</span>
    </h2>
    <p className="text-gray-400 mt-4 max-w-md mx-auto lg:mx-0">
      I specialize in building scalable, user-friendly websites and mobile applications using modern technologies.
    </p>
    <button className="bg-lime-400 px-8 py-3 text-black rounded-lg text-lg mt-6 lg:mx-0 mx-auto">
      <span>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gogoikuldeep32@gmail.com" target="_blank" rel="noopener noreferrer">
  Get in Touch
</a>

  </span>
  <span className="text-xl px-2 py-5">→</span>
    </button>
  </div>

  {/* Right Image Section */}
  <div className="lg:w-1/2 flex justify-center lg:justify-center mt-10 lg:mt-2">
    <img
      src={ProfileImage}
      alt="My Photo"
      className="rounded-full max-w-xs lg:max-w-sm border-4 border-lime-400"
    />
  </div>
</div>
  {/* Social Links Section */} 
<div className="lg:mt-24 mt-4 max-w-7xl lg:ml--2 mx-auto">
  <div className="bg-zinc-900 border border-lime-400 rounded-lg p-6 flex justify-between items-center space-x-4 lg:px-10">
    <div className="text-center flex-1">
      <a href="https://www.linkedin.com/in/kuldeep-gogoi/" className="text-white hover:text-lime-400 flex flex-col items-center">
        <FaLinkedinIn size={30} />
        <span>LinkedIn</span>
        <span className="text-sm text-gray-400">See My Work</span>
      </a>
    </div>
    <div className="text-center flex-1">
      <a href="https://github.com/kuldeep10011" className="text-white hover:text-lime-400 flex flex-col items-center">
        <FaGithub size={30} />
        <span>GitHub</span>
        <span className="text-sm text-gray-400">See My Projects</span>
      </a>
    </div>
    <div className="text-center flex-1">
      <a href="https://www.instagram.com/imkulldeep/" className="text-white hover:text-lime-400 flex flex-col items-center">
        <FaInstagram size={30} />
        <span>Instagram</span>
        <span className="text-sm text-gray-400">Follow Me Instagram</span>
      </a>
    </div>
    <div className="text-center flex-1">
      <a href="https://wa.me/+918822892994" className="text-white hover:text-lime-400 flex flex-col items-center">
        <FaWhatsapp size={30} />
        <span>WhatsApp</span>
        <span className="text-sm text-gray-400">Chat Now Whatsapp</span>
      </a>
    </div>
  </div>
</div>


    </div>
  );
}

export default HomePage;
