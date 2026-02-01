import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project_2.png";
import project3 from "../assets/project3.png";
import { motion } from "framer-motion";
import { useInView} from "react-intersection-observer";

const Work = () => {
    const projects = [
        {
            id: 1,
            title: "Secure File Sharing Application",
            description: "Developed a secure file-sharing web application using Python, Django, and Flask to enable encrypted file uploads, downloads, and sharing. Implemented AES encryption for data security and JWT authentication for user access control. Designed and executed unit tests with pytest to validate system functionality and security.",
            image: project1,
            link: "https://github.com/SohamDesai11/SecureFileSharing",
            tech: ["Python", "Django", "Flask", "PostgreSQL"],
        },
        {
            id: 2,
            title: "Flight Booking System",
            description: "A modern, user-friendly flight search platform built with React and a Node.js/Express backend. This project allows users to search flights, view prices, select flights, and add them to a cart—similar to popular platforms like Google Flights or Expedia.",
            image: project2,
            link: "https://github.com/SohamDesai11/AirlineTravelAssistant",
            tech: ["React", "Node.js", "Express"],
        },
        {
            id: 3,
            title: "Magic Card Scanning",
            description: "A comprehensive web application for scanning, cataloging, and managing your Magic: The Gathering card collection with real-time price tracking and OCR-powered card detection.",
            image: project3,
            link: "https://github.com/Cody935/MagicCardScanning",
            tech: ["OCR", "Python", "Flask", "SQLAlchemy"],
        }
    ]

    const {ref, inView} = useInView({
            threshold:0.2,
            triggerOnce: true,
    });

    return (
        <div id="projects" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                ref={ref}
                initial={{opacity:0, y:100}}
                animate={inView ? {opacity:1, y:0} : {}}
                transition={{delay:0.3, duration:0.5}}


                className="text-4xl text-white font-bold text-center mb-12">My Projects</motion.h2>
                <motion.p 
                ref={ref}
                initial={{opacity:0, y:100}}
                animate={inView ? {opacity:1, y:0} : {}}
                transition={{delay:0.5, duration:0.5}}
                className="mb-12 text-gray-400 text-center">Here are some of the projects I've worked on recently, showcasing my skills in software development and problem-solving.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {
                        projects.map((project) => (
                            <motion.div 
                            ref={ref}
                            initial={{opacity:0, y:50}}
                            animate={inView ? {opacity:1, y:0} : {}}
                            transition={{delay:project.id * 0.2, duration:0.5}}
                            key={project.id} className="bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span key={t} className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-md border border-white text-white bg-transparent">{t}</span>
                                    ))}
                                </div>
                                <div className="mt-auto">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition">Details</a>
                                </div>
                            </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Work;