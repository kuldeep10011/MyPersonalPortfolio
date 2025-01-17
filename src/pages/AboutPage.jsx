import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AboutImage from '../assets/About.jpg';
import EducationImage from '../assets/Education.jpg';
import ExperienceImage from '../assets/Experience.jpg';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsThreads } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import SkillsImage from '../assets/skills.webp';

import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';
import tailwindIcon from '../assets/tailwind.png';
import bootstrapIcon from '../assets/bootstrap.png';
import reactIcon from '../assets/react.png';
import mongodbIcon from '../assets/mongodb.png';
import nodejsIcon from '../assets/nodejs.png';
import expressIcon from '../assets/express.png';
import firebaseIcon from '../assets/firebase.png';
import flutterIcon from '../assets/flutter.png';
import figmaIcon from '../assets/figma.png';
import wordpressIcon from '../assets/wordpress.png';
import pythonIcon from '../assets/python.png';

function AboutPage() {
  const [activeSection, setActiveSection] = useState('about'); 
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center px-10 py-6">
        <h3 className="text-3xl font-bold text-lime-400">KULD<span className="text-white">EE</span>P</h3>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AiOutlineClose size={30} className="text-lime-400" />
            ) : (
              <AiOutlineMenu size={30} className="text-lime-400" />
            )}
          </button>
        </div>

        <ul className={`lg:flex space-x-8 text-sm uppercase hidden`}>
                  <li className="hover:text-lime-400 cursor-pointer">
                       <Link to="/">Home</Link>
          </li>
          <li className='cursor-pointer text-lime-400'>
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

      {menuOpen && (
        <ul className="flex flex-col space-y-4 text-center bg-black text-white uppercase text-sm py-4 lg:hidden">
                  <li className="hover:text-lime-400 cursor-pointer">
                      <Link to="/">Home</Link>
          </li>
          <li className='cursor-pointer text-lime-400'>
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
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-lime-400 underline">About Me</h2>

        <h3 className="text-4xl font-bold mt-6">Passionate Web & App Developer</h3>
              <h3 className="text-white mt-4 max-w-lg mx-auto">
                  Welcome to My Digital Portfolio! I am Kuldeep Gogoi, a passionate web and app developer. I'm always open to new opprtunities, collaboration and conversations. Whether you have a project in mind fell free to shared. Let's create something extraordinary togrther
        </h3>
      </div>

          <div className="max-w-6xl mx-auto mt-10">
              <div className="bg-zinc-900 max-w-xl rounded-lg p-6 flex justify-center items-center space-x-4 mx-auto">
          <div
            className={`flex-1 text-center cursor-pointer ${activeSection === 'about' ? 'bg-lime-400 py-2 px-2 rounded-lg text-zinc-700' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            <span>About</span>
          </div>
          <div
            className={`flex-1 text-center cursor-pointer ${activeSection === 'education' ? 'bg-lime-400 py-2 px-2 rounded-lg text-zinc-700' : ''}`}
            onClick={() => setActiveSection('education')}
          >
            <span>Education</span>
          </div>
          <div
            className={`flex-1 text-center cursor-pointer ${activeSection === 'experience' ? 'bg-lime-400 py-2 px-2 rounded-lg text-zinc-700' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            <span>Experience</span>
          </div>
          <div
            className={`flex-1 text-center cursor-pointer ${activeSection === 'skills' ? 'bg-lime-400 py-2 px-2 rounded-lg text-zinc-700' : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            <span>Skills</span>
          </div>
        </div>

    {activeSection === 'about' && (
      <div className="bg-zinc-800 rounded-lg p-6 mt-4 mx-4 sm:mx-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <img
              src={AboutImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-6 md:pl-6">
            <h4 className="text-xl font-bold text-lime-400">Personal Info</h4>
            <p className="text-white-400 mt-2">
              BCA student from Assam down town University with expertise in modern web and app development technologies, including React JS, Node.js,
              MongoDB, ExpressJS, Flutter, and Tailwind CSS. Skilled in creating efficient, user-centric solutions with a touch of UI/UX design. Dedicated to
              delivering impactful projects and advancing as a versatile developer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h5 className="font-bold text-lime-400">Email</h5>
                <p className="text-gray-400">gogoikuldeep32@gmail.com</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h5 className="font-bold text-lime-400">Phone</h5>
                <p className="text-gray-400">+91-8822892994</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h5 className="font-bold text-lime-400">Address</h5>
                <p className="text-gray-400">Dibrugarh, Assam, India</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h5 className="font-bold text-lime-400">Follow</h5>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/kuldeep.gogoi.528/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://x.com/gogoikuldeep32" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size={24} />
                  </a>
                  <a href="https://www.instagram.com/imkulldeep/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://www.threads.net/@imkulldeep" target="_blank" rel="noopener noreferrer">
      <BsThreads size={24} />
    </a>
                  <a href="https://www.linkedin.com/in/kuldeep-gogoi/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

   {activeSection === 'education' && (
  <div className="bg-zinc-800 rounded-lg p-6 mt-4">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        
        <img
          src={EducationImage}
          alt="Education"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-2/3 mt-6 md:pl-6">
        <h4 className="text-xl font-bold text-lime-400">Education</h4>
        <p className="text-white-400 mt-2">
          Here are the details of my educational journey:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h5 className="text-lime-400 font-bold">Assam Down Town University</h5>
            <p className="text-gray-400">BCA (2022-25)</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h5 className="text-lime-400 font-bold">Gyan Vigyan Academy</h5>
            <p className="text-gray-400">12th Science</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

        {activeSection === 'experience' && (
  <div className="bg-zinc-800 rounded-lg p-6 mt-4">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <img
          src={ExperienceImage}  
          alt="Experience"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-2/3 mt-6 md:pl-6">
        <h4 className="text-xl font-bold text-lime-400">Experience</h4>
        <p className="text-white-400 mt-2">
          Here is a brief overview of my professional experience:
        </p>

        <div className="mt-4 bg-zinc-900 p-6 rounded-lg">
          <h5 className="text-lime-400 font-bold">ICT Intern at Purabi Dairy (WAMUL), Guwahati</h5>
                                  <p className="text-white-800">Jun 2024 - Aug 2024</p>
                                  <p className="text-gray-400">
            Designed and developed a Ticket Management System, Samabai Sarathi, to streamline issue reporting for dairy farmers.
          </p>
        </div>

      </div>
    </div>
  </div>
)}

{activeSection === 'skills' && (
  <div className="bg-zinc-800 rounded-lg p-6 mt-4">
    <div className="flex flex-col md:flex-row">
      {/* Left Side Image */}
      <div className="w-full md:w-1/3">
        <img
          src={SkillsImage} // Replace with your skills image path
          alt="Skills"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-2/3 mt-6 md:pl-6">
        <h4 className="text-xl font-bold text-lime-400">Skills</h4>
        <p className="text-white-400 mt-2">
          Here is an overview of my technical skill set:
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 bg-zinc-900 p-6 rounded-lg">
          <div className="flex items-center space-x-3">
            <img src={htmlIcon} alt="HTML" className="w-8 h-8" />
            <p className="text-white">HTML</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={cssIcon} alt="CSS" className="w-8 h-8" />
            <p className="text-white">CSS</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={jsIcon} alt="JavaScript" className="w-8 h-8" />
            <p className="text-white">JavaScript</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={tailwindIcon} alt="TailwindCSS" className="w-8 h-8" />
            <p className="text-white">TailwindCSS</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={bootstrapIcon} alt="Bootstrap" className="w-8 h-8" />
            <p className="text-white">Bootstrap</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={reactIcon} alt="ReactJS" className="w-8 h-8" />
            <p className="text-white">ReactJS</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={mongodbIcon} alt="MongoDB" className="w-8 h-8" />
            <p className="text-white">MongoDB</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={nodejsIcon} alt="NodeJS" className="w-8 h-8" />
            <p className="text-white">NodeJS</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={expressIcon} alt="ExpressJS" className="w-8 h-8" />
            <p className="text-white">ExpressJS</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={firebaseIcon} alt="Firebase" className="w-8 h-8" />
            <p className="text-white">Firebase</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={flutterIcon} alt="Flutter" className="w-8 h-8" />
            <p className="text-white">Flutter</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={figmaIcon} alt="Figma" className="w-8 h-8" />
            <p className="text-white">Figma</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={wordpressIcon} alt="WordPress" className="w-8 h-8" />
            <p className="text-white">WordPress</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={pythonIcon} alt="Python" className="w-8 h-8" />
            <p className="text-white">Python</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}



      </div>
    </div>
  );
}

export default AboutPage;
