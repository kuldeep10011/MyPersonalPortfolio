import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function ServicePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "I specialize in creating visually appealing and user-friendly interfaces using modern technologies like React.js, Tailwind CSS, and Vite. My focus is on responsive designs, intuitive navigation, and seamless user experiences.",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Proficient in building robust and scalable server-side applications using Node.js, Express.js, and MongoDB. I ensure data security, performance optimization, and seamless API integration.",
    },
    {
      id: 3,
      title: "Full Stack Development (MERN, Firebase)",
      description:
        "As a full-stack developer, I handle both frontend and backend tasks with expertise in the MERN stack and Firebase. From database management to crafting dynamic, responsive interfaces, I deliver end-to-end solutions.",
    },
    {
      id: 4,
      title: "App Development",
      description:
        "With experience in Flutter, I create cross-platform mobile applications that are efficient, responsive, and visually appealing. Whether it's Android or iOS, I deliver high-quality apps tailored to your needs.",
    },
    {
      id: 5,
      title: "WordPress Development",
      description:
        "I build custom WordPress websites that are fast, secure, and optimized for search engines. From blogs to e-commerce, I tailor solutions to match your brand and functionality requirements.",
    },
  ];

  const handleToggle = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h3 className="text-3xl font-bold text-lime-400">
          KULD<span className="text-white">EE</span>P
        </h3>

        {/* Hamburger Menu */}
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
        <ul className="hidden lg:flex space-x-8 text-sm uppercase">
          <li className="hover:text-lime-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-lime-400 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-lime-400 cursor-pointer">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-lime-400 cursor-pointer">
            <Link to="/services">Services</Link>
          </li>
           <li className='cursor-pointer hover:text-lime-400'>
                      <Link to="/contacts">Contact</Link>
              </li>
        </ul>

        <button className="hidden lg:block text-white border border-lime-400 px-6 py-2 rounded-lg text-sm">
          <a
            href="https://wa.me/918822892994?text=Hi,%20Kuldeep...%20I%20would%20like%20to%20chat%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let’s Talk
          </a>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col space-y-4 text-center bg-black text-white uppercase text-sm py-4 lg:hidden">
          <li className="hover:text-lime-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-lime-400 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-lime-400 cursor-pointer">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-lime-400 cursor-pointer">
            <Link to="/services">Services</Link>
          </li>
           <li className='cursor-pointer hover:text-lime-400'>
                      <Link to="/contacts">Contact</Link>
              </li>
          <li>
            <button className="border border-lime-400 px-6 py-2 text-white rounded-lg text-sm">
              <a
                href="https://wa.me/918822892994?text=Hi,%20Kuldeep...%20I%20would%20like%20to%20chat%20with%20you!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let’s Talk
              </a>
            </button>
          </li>
        </ul>
      )}

      {/* Services Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h1 className="text-center text-4xl font-bold text-white">
          My Special Services
        </h1>
        <p className="text-center text-lg text-zinc-400 mt-4">
          Click on each service to learn more about what I offer.
        </p>

        <div className="mt-10 space-y-6">
          {services.map((service) => (
            <div key={service.id}>
              {/* Service Header */}
              <div
                className={`flex justify-between items-center p-6 rounded-lg ${
                  activeService === service.id
                    ? "bg-lime-400 text-black"
                    : "bg-zinc-900"
                }`}
                onClick={() => handleToggle(service.id)}
              >
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <button className="text-lg font-bold">
                  {activeService === service.id ? "-" : "+"}
                </button>
              </div>

              {/* Service Description */}
              {activeService === service.id && (
                <div className="bg-zinc-800 p-6 mt-2 rounded-lg">
                  <p className="text-lg text-zinc-300">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
