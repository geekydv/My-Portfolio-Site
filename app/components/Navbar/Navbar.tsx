"use client"
import React, {useState} from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const showMenuList = () => {
    console.log(showMobileMenu,'showMobileMenu')
    setShowMobileMenu(prevState => !prevState);
  }
  return (
    <nav className="w-full h-32 mx-auto flex justify-between items-center bg-transparent font-bold relative">
    <strong className="name text-3xl tracking-tight">Divyesh Birawat</strong>
    <button className="relative top-1" onClick={()=> showMenuList()}>
      <Image className="lg:hidden" width="24" height="24" src="./hamburger.svg" alt="toggle menu" loading = 'lazy' />
    </button>
    <ul role="list" className={`menu-list ${showMobileMenu ? `maxlg:mobileHamburger` : 'hidden' } lg:desktopHamburger gap-x-6 bg-transparent font-light text-2xl transition-all ease-in duration-300`}>
      <li className="cursor-pointer hover:scale-105 hover:underline underline-offset-2 hover:decoration-black lg:hover:decoration-fuchsia-50 transition-all duration-300"><a href="#aboutme">About</a></li>
      <li className="cursor-pointer hover:scale-105 hover:underline underline-offset-2 hover:decoration-black lg:hover:decoration-fuchsia-50 transition-all duration-300"><a href="#myexperience">Experience</a></li>
      <li className="cursor-pointer hover:scale-105 hover:underline underline-offset-2 hover:decoration-black lg:hover:decoration-fuchsia-50 transition-all duration-300"><a href="#myprojects">Projects</a></li>
      <li className="cursor-pointer hover:scale-105 hover:underline underline-offset-2 hover:decoration-black lg:hover:decoration-fuchsia-50 transition-all duration-300"><a href="#contactme">Contact</a></li>
    </ul>
    </nav>
  )
}

export default Navbar