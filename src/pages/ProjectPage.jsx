import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import samabaiImage from '../assets/Experience.jpg';
import emailAIImage from '../assets/emailai.jpg';
import petCareImage from '../assets/petcare.jpg';
import quizioImage from '../assets/quizio.jpg';
import chessGameImage from '../assets/chessgame.jpg';

function ProjectPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const projectData = [
    {
      name: 'Samabai Sarathi',
      description: 'Designed and Developed a Ticket Management System, Samabai Sarathi to streamline issue reporting for dairy farmers',
      image: samabaiImage,
      github: 'https://github.com/wamulworkspace/Purabi_Ticket_apk',
    },
    {
      name: 'EmailAI',
      description: 'Developed a website that automates email sending by importing user details from a CSV file',
      image: emailAIImage,
      github: 'https://github.com/kuldeep10011/Email_automation_project',
    },
    {
      name: 'Pet Care App',
      description: 'Build an app in Flutter with health care information for pet owners',
      image: petCareImage,
      github: 'https://github.com/kuldeep10011/Pet-Care-App',
    },
    {
      name: 'QUIZIO',
      description: 'Developed an online multiplayer quiz application for interactive learning and engagement',
      image: quizioImage,
      github: 'https://github.com/kuldeep10011/QUIZIO',
    },
    {
      name: 'Chess Game',
      description: 'A digital implementation of the classic chess board game for players of all skill levels.',
      image: chessGameImage,
      github: 'https://github.com/kuldeep10011/chessgame',
    },
  ];

  const visibleProjects = showMore ? projectData : projectData.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h3 className="text-3xl font-bold text-lime-400">
          KULD<span className="text-white">EE</span>P
        </h3>

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
          <li className="hover:text-lime-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-lime-400">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer text-lime-400">
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
            <a
              href="https://wa.me/918822892994?text=Hi,%20Kuldeep...%20I%20would%20like%20to%20chat%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s Talk
            </a>
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col space-y-4 text-center bg-black text-white uppercase text-sm py-4 lg:hidden">
          <li className="hover:text-lime-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-lime-400">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer text-lime-400">Projects</li>
          <li className='cursor-pointer hover:text-lime-400'>
                      <Link to="/services">Services</Link>
                    </li>
           <li className='cursor-pointer hover:text-lime-400'>
                      <Link to="/contacts">Contact</Link>
              </li>
          <li>
            <button className="border border-lime-400 px-6 py-2 text-white rounded-lg text-sm mt-2">
              <span>
                <a
                  href="https://wa.me/918822892994?text=Hi,%20Kuldeep...%20I%20would%20like%20to%20chat%20with%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let’s Talk
                </a>
              </span>
            </button>
          </li>
        </ul>
      )}

      {/* Heading */}
      <div className="mt-20 pl-10">
        <h2 className="text-2xl font-bold text-lime-300">
          Here are Glimpse of My Projects:
        </h2>
      </div>

      {/* Project Grid */}
      <div className="max-w-full mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <div key={index} className="relative group">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[40vh] object-cover rounded-lg group-hover:blur-sm cursor-pointer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/70 rounded-lg">
              <div className="text-center text-white p-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="mt-2">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-400 hover:text-lime-500 mt-2 inline-block"
                >
                  <FaGithub size={20} className="inline mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="text-center mt-2 text-lg font-semibold text-lime-400">
              {project.name}
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-lime-400 text-black px-6 py-2 rounded-lg text-sm hover:bg-lime-500"
        >
          {showMore ? 'See Less' : 'See More'}
        </button>
      </div>

      {/* LinkedIn Box */}
      <div className="mt-8 px-6">
        <div className="bg-zinc-900 p-6 rounded-lg flex items-center max-w-2xl">
          <FaLinkedinIn size={40} className="text-lime-400 mr-6" />
          <div className="text-left">
            <h2 className="text-2xl font-bold text-white">Connect on LinkedIn</h2>
            <p className="text-zinc-400">
              See more about my professional journey and project contributions.
            </p>
            <a
              href="https://www.linkedin.com/in/kuldeep-gogoi/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lime-400"
            >
              Visit My LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
