'use client'

import { skillsData } from "../assets/skillsData"
import { projectsData } from "../assets/projectData"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import { Github, Linkedin, Mail } from 'lucide-react'
import Contact from "../components/Contact"
import Typewriter from "../components/Typewriter"
import Image from 'next/image'
import BlobImage from "../components/BlobImage"


export default function Home() {
  
  

  return (
    <main  >
        <Navbar/>
        <section id="WB" className="flex items-center justify-center h-screen ">
          <div className="flex flex-col items-center text-text-primary-400">
            <div className="font-regular text-6xl mb-8">
              I'm <Typewriter text="Wout Blomme" />
            </div>
            <div className="font-extrabold text-5xl">
              A Full Stack Web Developer
            </div>
          </div>
        </section>
        <section id="ME" className="bg-primary-500 h-screen mx-20 rounded-t-3xl rounded-b-none flex justify-between items-center">
          <div className=" ml-40 w-auto">
            <div className="maskedImageContainer">
              <Image 
                className="maskedImage"
                src={"/ME.png"}
                alt={"Picture Wout Blomme"}
                width={300}
                height={200}/>
            </div>
            
          </div>
          <div className="flex flex-col text-text-primary-500 items-start justify-center w-1/2 ">
            <div className="mb-10 font-bold text-4xl">
              This is me.
            </div>
            <p className="">
              Hi, I am from Maldegem, Belgium. I am a Full Stack Web Developer. I am currently studying at Howest University of Applied Sciences in Kortrijk. I am in my second year of the Bachelor MCT (Multimedia and Creative Technologies). I am a very motivated and ambitious person who is always eager to learn new things and always wants to achieve his goals. 
            </p>
          </div>
        </section>
        <section id="SKILLS" className="bg-primary-500 h-50vh mx-20  rounded-b-none flex flex-col items-center justify-center">
          <div className="flex text-text-primary-500 items-start justify-center w-1/2 mb-10 font-bold text-4xl">
            Skills
          </div>
          <div className="flex row-start-2 text-text-primary-500 justify-center w-full  ">
            <Skills skills={skillsData}/>
          </div>
          
        </section>
        <section id="PROJECTS" className="bg-primary-500 h-75vh mx-20  rounded-b-none flex items-center ">
          <div className="flex text-text-primary-500 items-start justify-center w-1/2 mb-10 font-bold text-4xl ">
            My Projects
          </div>
          <div className="w-1/2">
            <Projects projects={projectsData}/>
          </div>
          
        </section>
        <section id="CONTACT" className="bg-primary-500 mx-20 rounded-b-3xl mb-8 flex justify-center items-center">
          <div className=" mb-56 mt-16 font-bold text-4xl">
            <Contact/>
          </div>
        </section>
        <footer className=" px-4  md:px-6">
          <div className="mx-auto max-w-screen-xl py-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="md:text-1xl transform px-1 text-center text-lg font-black text-own-neutral-600 dark:text-own-neutral-400 lg:text-3xl">
                WB
              </p>
              <p className=" text-center text-sm font-medium text-own-neutral-700 dark:text-own-neutral-300 md:text-right md:text-base ">
                &copy; {new Date().getFullYear()} Wout Blomme - All rights reserved
              </p>
            </div>
          </div>
        </footer>
    
      
    </main>
  )
}
