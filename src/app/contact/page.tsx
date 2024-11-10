import React from 'react';
import Link from 'next/link';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (

<div>

<header className="text-white bg-[#dee600d8] body-font">
    <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
        <span className="ml-8 text-3xl font-bold">NITRO</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center gap-20 text-black font-semibold text-lg">
        <Link href={"/"} >Home</Link>
        <Link href={"/about"} >About</Link>
        <Link href={"/contact"} >Contact</Link>
        <Link href={"/shop"} >shop</Link>
      </nav>
   
    </div>
  </header>


    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 text-center mb-8">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Have any questions or feedback? We d love to hear from you!
        </p>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 md:mb-0"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Your Message"
            
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>


    <footer className="bg-[#dee600d8] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-extrabold text-black">NITRO</h1>
          
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="#"
            className="text-black text-3xl hover:text-blue-500 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-black text-3xl hover:text-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-black text-3xl hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-black text-3xl hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="text-lg font-bold text-black">
          <p>© 2024 Nitro Beverages. All rights reserved.</p>
        </div>
      </div>
    </footer> 


</div>
  );
};

export default Contact;
