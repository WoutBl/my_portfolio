'use client'
import { skillsData } from "../assets/skillsData"
import { projectsData } from "../assets/projectData"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Projects from "../components/Projects"


export default function Home() {

  

  return (
    <main  >
        <Navbar/>
        <section id="WB" className="flex items-center justify-center h-screen ">
          <div className="flex flex-col items-center text-text-primary-400">
            <div className="font-regular text-6xl mb-8">
              I'm Wout Blomme
            </div>
            <div className="font-extrabold text-5xl">
              A Full Stack Web Developer
            </div>
          </div>
        </section>
        <section id="ME" className="bg-primary-500 h-screen mx-20 rounded-t-3xl rounded-b-none flex items-center">
          <div className="w-1/2">

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
        <section id="SKILLS" className="bg-primary-500 h-screen mx-20  rounded-b-none flex flex-col items-center justify-center">
          <div className="flex row-start-1 justify-center  w-full mb-10 font-bold text-4xl">
            Skills
          </div>
          <div className="flex row-start-2 text-text-primary-500 justify-center w-full  ">
            <Skills skills={skillsData}/>
          </div>
          
        </section>
        <section id="PROJECTS" className="bg-primary-500 h-screen mx-20  rounded-b-none flex items-center">
          <div className="mb-10 font-bold text-4xl w-1/2">
            Projects
          </div>
          <Projects projects={projectsData}/>
        </section>
        <section id="CONTACT" className="bg-primary-500 h-screen mx-20  rounded-b-none flex items-center">
          <div className="mb-10 font-bold text-4xl">
            Contact
          </div>
        </section>

    
      
    </main>
  )
}
