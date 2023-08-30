
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import NavLink from "./NavLink"
import Link from "next/link"

const Navigation = ({}) => {
    const handleNavLinkClick = (event: { preventDefault: () => void }, targetId: any) => {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        console.log(targetElement.id)
        if (targetElement) {

            var yOffset = -100; // Adjust this value to your preference
            if(targetElement.id == 'WB'){
                var yOffset = -100; // Adjust this value to your preference
            }
            if(targetElement.id == 'ME'){
                var yOffset = -130; // Adjust this value to your preference
            }
            if(targetElement.id == 'SKILLS'){
                var yOffset = -150; // Adjust this value to your preference
            }
            if(targetElement.id == 'PROJECTS'){
                var yOffset = -128; // Adjust this value to your preference
            }
            if(targetElement.id == 'CONTACT'){
                var yOffset = -100; // Adjust this value to your preference
            }
            console.log(yOffset)
          const yCoordinate = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
        }
      };
    
    
    return (
        <div className="flex fixed z-50 flex-row items-center justify-evenly w-full h-32 bg-primary-400 font-bold text-xl text-text-primary-400">
            <Link href="#WB" onClick={(e) => handleNavLinkClick(e, '#WB')} className="text-5xl font-black">
                WB
            </Link>
            
            <div className="flex">
                <Link href="#ME" onClick={(e) => handleNavLinkClick(e, '#ME')} className="mx-8 hover:text-text-secundary-500">
                    ME
                </Link>
                <Link href="#SKILLS" onClick={(e) => handleNavLinkClick(e, '#SKILLS')} className="mx-8 hover:text-text-secundary-500">
                    SKILLS
                </Link>
                <Link href="#PROJECTS" onClick={(e) => handleNavLinkClick(e, '#PROJECTS')} className="mx-8 hover:text-text-secundary-500">
                    PROJECTS
                </Link>
                <Link href="#CONTACT" onClick={(e) => handleNavLinkClick(e, '#CONTACT')} className="mx-8 hover:text-text-secundary-500">
                    CONTACT
                </Link>
            </div>
            <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ ease: 'easeInOut', duration: 0.1 }}
                key="download"
                className="flex "
                >
                <a
                    href="/docs/WB-Resume.pdf"
                    download
                    className={`flex gap-2 px-8 py-4 bg-secundary-600 rounded-xl`}>
                    <Download
                    />
                    Resume
                </a>
            </motion.li>
        </div>
    )
}

export default Navigation