import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
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


<div className="bg-[url('/picture/bg1.jpg')] bg-cover bg-center w-full h-[90vh]"
>
<Image
    src={'/picture/Can (2).png'}
    alt="can"
    height={650}
    width={600}
    className=" mx-auto pt-[9rem] transform transition hover:scale-110 hover:duration-500"
  />
</div>
    

    <div>
    <Image src={'/picture/new2.png'} alt="image" height={100} width={1122} className="w-[150rem] h-[40rem]"></Image>
    </div>


  


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
}
