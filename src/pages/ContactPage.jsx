import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsThreads } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, phone, message } = formData;

    // Validate all fields are filled
    if (!firstName || !email || !phone || !message) {
      setError("Please fill out all fields.");
      setSuccess("");
      return;
    }

    try {
      // Send form data to MongoDB backend
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      if (response.data.success) {
        setSuccess("Message sent successfully!");
        setError("");
        setFormData({ firstName: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSuccess("");
    }
  };

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
          <li className="cursor-pointer hover:text-lime-400">
            <Link to="/projects">Projects</Link>
          </li>
          <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/services">Services</Link>
          </li>
          <li className='cursor-pointer text-lime-400'>
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
          <li className="cursor-pointer hover:text-lime-400">Projects</li>
          <li className='cursor-pointer hover:text-lime-400'>
            <Link to="/services">Services</Link>
          </li>
          <li className='cursor-pointer text-lime-400'>
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

      {/* Main Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h1 className="text-center text-4xl font-bold text-white">
          Contact me For any Enquiry !
        </h1>

        {/* Contact Options */}
        <div className="flex justify-center items-center space-x-8 mt-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gogoikuldeep32@gmail.com" target="_blank" rel="noopener noreferrer"
            className="bg-lime-400 text-black px-6 py-3 rounded-lg text-xl font-semibold hover:bg-lime-500"
          >
            Email Me
          </a>
          <a
            href="tel:8822892994"
            className="bg-lime-400 text-black px-6 py-3 rounded-lg text-xl font-semibold hover:bg-lime-500"
          >
            Call Me
          </a>
        </div>

        {/* Form Section */}
        <h3 className="text-center text-xl font-bold text-white mt-12">
          Send your Message here. I will Contact you shortly
        </h3>
        <form
          className="bg-zinc-900 p-8 rounded-lg mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-zinc-400 mb-2">Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-black text-lime-400 border border-zinc-700 focus:outline-none focus:border-lime-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-black text-lime-400 border border-zinc-700 focus:outline-none focus:border-lime-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-black text-lime-400 border border-zinc-700 focus:outline-none focus:border-lime-400"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-black text-lime-400 border border-zinc-700 focus:outline-none focus:border-lime-400"
              placeholder="Enter your message"
              rows="5"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-lime-400 text-sm">{success}</p>}
          <button
            type="submit"
            className="w-full bg-lime-400 text-black py-3 rounded-lg text-xl font-bold hover:bg-lime-500"
          >
            Send Message
          </button>
        </form>
      </div>

     {/* Footer */}
<div className="bg-zinc-900 p-6 mt-12">
  <div className="flex flex-col lg:flex-row justify-between lg:space-x-8 space-y-6 lg:space-y-0">
    {/* Follow me on Social Media */}
    <div className="text-center lg:text-left">
      <h5 className="font-bold text-lime-400">Follow</h5>
      <div className="flex justify-center lg:justify-start space-x-4">
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

    {/* Important Links (Center) */}
    <div className="text-center">
      <h5 className="font-bold text-lime-400">Important Links</h5>
      <ul className="text-center space-y-2">
        <li className="cursor-pointer hover:text-lime-400">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-lime-400">
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer hover:text-lime-400">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="cursor-pointer hover:text-lime-400">
          <Link to="/services">Services</Link>
        </li>
        <li className="cursor-pointer hover:text-lime-400">
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>
    </div>

    {/* Download My Resume (Right side) */}
    <div className="text-center lg:text-right mt-4 lg:mt-0">
      <a
        href="/assets/Kuldeep_Gogoi_Resume_2025_Final.pdf"
        download
        className="text-lime-400 font-semibold text-lg"
      >
        Download My Resume
      </a>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center mt-6 text-sm text-zinc-500">
    <p>&copy; 2025 Kuldeep Gogoi. All rights reserved.</p>
  </div>
</div>

    </div>
  );
}

export default ContactPage;

