
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
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

export default Footer;
