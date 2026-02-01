import React from "react";
import aboutImg from "../assets/aboutImg.png";
import { motion } from "framer-motion";
import { useInView} from "react-intersection-observer";

const About = () => {

    const {ref, inView} = useInView({
        threshold:0.2,
        triggerOnce: true,
    });
    return (
        <div id="about" className="text-white py-24">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                ref={ref}
                initial={{opacity:0, y:100}}
                animate={ inView ? {opacity:1, y:0} : {}}
                transition={{delay:0.3, duration:0.5}}
                className="text-4xl md:text-4xl font-bold mb-8">About Me</motion.h2>
                <motion.p 
                ref={ref}
                initial={{opacity:0, y:100}}
                animate={ inView ? {opacity:1, y:0} : {}}
                transition={{delay:0.5, duration:0.5}}
                
                className="mb-12 text-gray-400 text-center"></motion.p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <motion.div
                ref={ref}
                initial={{opacity:0, x:-100}}
                animate={ inView ? {opacity:1, x:0} : {}}
                transition={{delay:0.6, duration:0.5}}
                className="mb-8 md:mb-0 md:mr-8 flex justify-center">
                    <img src={aboutImg} className="w-2/3 sm:w-1/2 md:w-10/12"/>
                </motion.div>
                <motion.p 
                ref={ref}
                initial={{opacity:0, x:100}}
                animate={ inView ? {opacity:1, x:0} : {}}
                transition={{delay:0.6, duration:0.5}}
                className="md:w-1/2  text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl">
                    I’m a software engineering student at Seneca Polytechnic with a focus on software development, 
                    database management, and cybersecurity. With experience across diverse projects, 
                    I bring strong skills in project management, teamwork, and 
                    problem-solving to every challenge, aiming to build innovative and efficient solutions in the tech industry.
                </motion.p>
                </div>
            </div>
        </div>
    );
}
export default About;