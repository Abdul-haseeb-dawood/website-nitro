import React from 'react'
import Link from 'next/link'

const Header = () => {
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
</div>

  

    
  )
}

export default Header
