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
  
          <li className="text-2xl h-full flex ">
            <Link href="#welcome">
              <Image src="/images/logo.svg" alt="logo" width={250} height={250} />
            </Link>
          </li>
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center space-x-4">
          <li className="w-[20%]">
            <Link href="#about">~/ about</Link>
          </li>
          <li className="w-[20%]">
            <Link href="#projects">~/ projects</Link>
          </li>
          <li className="w-[20%]">
            <Link href="#contact">~/ contact</Link>
          </li>
        </div>

        {/* Burger Menu Button */}
        <div className="md:hidden">
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