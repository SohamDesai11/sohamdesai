import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import resume from "../assets/Soham_Desai_Resume (6).pdf";

const Navigation = () => {

const variants = {
  open: {
    clipPath: "circle(1400px at 43px 43px)",
    transition: { type: "spring" },
  },
  closed: {
    clipPath: "circle(25px at 43px 37px)",
    transition: { type: "spring", duration: 1 },
  },
};

  const [menu, setMenu] =useState(false);
  const items = [
    { id: 1, text: "Home", href: "#" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Projects", href: "#projects" },
    { id: 4, text: "Contact", href: "#contact" },
  ];
  return (
    <>
      <nav className="fixed w-full top-0 z-50">
        <div className='container mx-auto hidden md:flex justify-between items-center py-6 bg-[#0e0c1e]/60 backdrop-blur-sm'>
          <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
            <span className='text-white'>Soham</span>
            <span className='text-purple-500'>Desai</span>
          </div>
          <div>
            <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
              {items.map(({id, text, href})=> (
                <li key={id}><a href={href} className='hover:text-purple-500 duration-150 cursor-pointer'>{text}</a></li>
              ))}
            </ul>
          </div>
          <a href={resume} download="Soham_Desai_Resume.pdf" className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
        <div className='flex md:hidden justify-between bg-[#0e0c1e]/60 backdrop-blur-sm'>
        <motion.div
        initial="closed"
        animate={menu ? "open" : "closed"}>
          <motion.div
          variants={variants}
          className='bg-white w-2/3 h-screen text-black fixed z-10 overflow-hidden left-0 top-0'>
            <div className='px-7 py-6 cursor-pointer' onClick={() => setMenu(prev => !prev)} role="button" aria-label="Toggle menu">
              {menu ? <IoIosClose size={30}/> : (<IoMenu size={30}/>) }
            </div>
            {menu && (

              <div className="flex flex-col justify-center items-center">
                <ul className="space-y-6 text-black text-lg">
                  {items.map(({id, text, href})=> (
                    <li key={id}><a href={href} onClick={() => setMenu(false)} className='hover:text-purple-500 duration-200 cursor-pointer'>{text}</a></li>
                  ))} 
                </ul>
                <a href={resume} download="Soham_Desai_Resume.pdf" onClick={() => setMenu(false)} className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-4 rounded-full" target="_blank" rel="noopener noreferrer">Download CV</a>
              </div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
        initial={{opacity:0, x: 100, y: -100}}
        animate={{opacity:1, x:0, y:0}}
        transition={{duration: 0.1}} className='text-xl font-bold flex items-center gap-2 py-6 px-4'>
            <span className="text-white">Soham</span>
            <span className="text-purple-500">Desai</span>
        </motion.div>
      </div>
      </nav>
      <div className="h-20 md:h-20" />
    </>
  )
}
export default Navigation;