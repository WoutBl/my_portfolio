
import { skillsData } from "../../assets/skillsData"
import { projectsData } from "../../assets/projectData"
import Navbar from "../../components/Navbar"
import Skills from "../../components/Skills"
import Projects from "../../components/Projects"
import { Github, Linkedin, Mail } from 'lucide-react'
import Contact from "../../components/Contact"
import Typewriter from "../../components/Typewriter"
import Image from 'next/image'
import BlobImage from "../../components/BlobImage"


export default function ShareCar() {
  
  

    return (
      <main  >
          <Navbar/>
          
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
  