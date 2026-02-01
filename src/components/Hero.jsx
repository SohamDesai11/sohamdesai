import React from "react";
import avatar from "../assets/hero2.png";
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="text-white py-20">
            <motion.img initial={{opacity: 0, scale:0}} animate={{opacity:1, scale:1}} transition={{delay: 0.5, duration: 0.5}} src={avatar} className="mx-auto w-2/3 md:w-1/3 lg:w-1/4"/>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration: 0.5}}
            className='container mx-auto text-center'>
                <motion.h1 initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay:1, duration:0.5}} className='text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4'>Software Engineer
                    <motion.span initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay:1.1, duration:0.5}} className="text-purple-500">Student @Seneca Polytechnic</motion.span>
                </motion.h1>
                <motion.p initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay:1.2, duration:0.5}} className="text-gray-400 text-lg mb-8">Welcome To My Website !!</motion.p>

                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:1.6, duration:0.4}} className="flex items-center gap-6 justify-center mb-10">
                    <motion.a href="https://www.linkedin.com/in/soham-desai-495125334/" target="_blank" rel="noopener noreferrer" whileHover={{scale:1.12}} className="text-gray-300 hover:text-white text-5xl"><FaLinkedin /></motion.a>
                    <motion.a href="https://github.com/SohamDesai11" target="_blank" rel="noopener noreferrer" whileHover={{scale:1.12}} className="text-gray-300 hover:text-white text-5xl"><FaGithub /></motion.a>
                    <motion.a href="https://www.instagram.com/sohamdesaii/" target="_blank" rel="noopener noreferrer" whileHover={{scale:1.12}} className="text-gray-300 hover:text-white text-5xl"><FaInstagram /></motion.a>
                </motion.div>
            </motion.div>
        </div>
    )  
}

export default Hero;