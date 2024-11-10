import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const page = () => {
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
      
      
<div
  className="bg-[url('/picture/bg3.png')] bg-cover bg-center w-full h-[110vh]">
<h1 className='absolute text-4xl font-bold text-[#fff] px-[34rem] pt-14  '>New Products</h1>

  <Image
    src={'/picture/can5.png'}
    alt="sff"
    height={145}
    width={145}
    className=" ml-[6rem] mt-[12.8rem] absolute  transform transition hover:scale-110 hover:duration-300"
  />
  <Image
    src={'/picture/can2.png'}
    alt="sff"
    height={170}
    width={170}
    className="absolute ml-[21.2rem] mt-[9.4rem]  transform transition hover:scale-110 hover:duration-300"
  />




  <Image
    src={'/picture/can.png'}
    alt="sff"
    height={200}
    width={200}
    className="absolute ml-[37.5rem] mt-[4.5rem] transform transition hover:scale-110 hover:duration-300"
  />





  <Image
    src={'/picture/can4.png'}
    alt="sff"
    height={145}
    width={145}
    className="absolute ml-[72.4rem] mt-[12.8rem]  transform transition hover:scale-110 hover:duration-300"
  />
  <Image
    src={'/picture/can3.png'}
    alt="sff"
    height={170}
    width={170}
    className="absolute ml-[57.4rem] mt-[9.4rem] transform transition hover:scale-110 hover:duration-300"
  />
</div>


{/* alag hai */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap -m-4">

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transform transition hover:scale-110 duration-300"
            src="/picture/nitro1.png"
            width={500} 
            height={500}
            
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-xl font-bold">
            Tropical Strom
          </h2>
          <p className="mt-1 text-gray-700 font-semibold">$16.00</p>
        </div>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transform transition hover:scale-110 duration-300"
            src="/picture/nitro2.png"
            width={500} 
            height={500}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-bold">
            Monster Energy
          </h2>
          <p className="mt-1  text-gray-700 font-semibold">$21.15</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transform transition hover:scale-110 duration-300"
            src="/picture/nitro3.png"
            width={500} 
            height={500}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-bold">
            Mega vibes
          </h2>
          <p className="mt-1  text-gray-700 font-semibold">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transform transition hover:scale-110 duration-300"
            src="/picture/nitro4.png"
            width={500} 
            height={500}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-bold">
            Fruity Blast
          </h2>
          <p className="mt-1  text-gray-700 font-semibold">$18.40</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transform transition hover:scale-110 duration-300"
            src="/picture/nitro5.png"
            width={500} 
            height={500}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-bold">
            Max Bubbler
          </h2>
          <p className="mt-1  text-gray-700 font-semibold">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transform transition hover:scale-110 duration-300"
            src="/picture/nitro6.png"
            width={500} 
            height={500}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-bold">
            Herbal Spice
          </h2>
          <p className="mt-1  text-gray-700 font-semibold">$21.15</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transform transition hover:scale-110 duration-300"
            src="/picture/nitro7.png"
            width={500} 
            height={500}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-bold">
            Cherry Blosum
          </h2>
          <p className="mt-1  text-gray-700 font-semibold">$12.00</p>
        </div>
      </div>


<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <a className="block relative h-48 rounded overflow-hidden">
    <Image
      alt="ecommerce"
      className="object-cover object-center w-full h-full block transform transition hover:scale-110 duration-300"
      src="/picture/nitro8.png"
      width={500} 
      height={500} 
    />
  </a>
  <div className="mt-4">
    <h2 className="text-gray-900 title-font text-lg font-bold">Cold Brew</h2>
    <p className="mt-1 text-gray-700 font-semibold">$18.40</p>
  </div>
</div>


   
    </div>
  </div>
</section>


{/* footer */}
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
  )
}

export default page
