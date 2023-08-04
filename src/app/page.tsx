'use client'
import Navbar from "../components/Navbar"


export default function Home() {

  

  return (
    <main  >
        <Navbar/>
        <section className="flex items-center justify-center h-screen ">
          <div className="flex flex-col items-center text-text-primary-400">
            <div className="font-regular text-6xl mb-8">
              I'm Wout Blomme
            </div>
            <div className="font-extrabold text-5xl">
              A Full Stack Web Developer
            </div>
          </div>
        </section>
        <section className="bg-primary-500 h-screen mx-20 rounded-t-3xl rounded-b-none flex items-center">
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
        <section  className="bg-primary-500 h-screen mx-20  rounded-b-none flex items-center">
          <div className="mb-10 font-bold text-4xl">
            Skills
          </div>
        </section>

    
      
    </main>
  )
}
