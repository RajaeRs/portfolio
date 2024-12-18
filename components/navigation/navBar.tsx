"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full text-foreground h-24 flex items-center bg-background z-10">
      <ul className="flex w-full h-full items-center justify-between font-bold text-lg pr-4">
        {/* Logo */}
  
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center container">
          <li className="w-[20%]">
            <Link href="#/">
              <Image src="/images/logo.png" alt="logo" width={150} height={100} />
            </Link>
          </li>
          <li className="w-[20%] h-max">
            <Link href="#about">~/ about</Link>
          </li>
          <li className="w-[20%] h-max">
            <Link href="#projects">~/ projects</Link>
          </li>
          <li className="w-[20%] h-max">
            <Link href="#experience">~/ experience</Link>
          </li>
          <li className="w-[20%] h-max">
            <Link href="#contact">~/ contact</Link>
          </li>
        </div>

        {/* Burger Menu Button */}
        <div className="md:hidden flex w-full justify-between px-4">
          <li className="w-[50%]">
            <Link href="#welcome">
              <Image src="/images/logo.png" alt="logo" width={150} height={100} />
            </Link>
          </li>
          <button 
            onClick={toggleMenu} 
            className="text-foreground focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </ul>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed md:hidden inset-0 bg-background/90 top-24 flex flex-col items-center justify-center space-y-6 text-2xl">
          <Link 
            href="#about" 
            className="hover:text-primary"
            onClick={toggleMenu}
          >
            ~/ about
          </Link>
          <Link 
            href="#projects" 
            className="hover:text-primary"
            onClick={toggleMenu}
          >
            ~/ projects
          </Link>
          <Link 
            href="#contact" 
            className="hover:text-primary"
            onClick={toggleMenu}
          >
            ~/ contact
          </Link>
        </div>
      )}
    </nav>
  );
}