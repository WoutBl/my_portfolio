import { motion } from "framer-motion"
import { Download } from "lucide-react"
import NavLink from "./NavLink"
import Link from "next/link"

const Navigation = ({
    
  }: {
    
  }) => {
    
    
    
    return (
        <div className="flex fixed z-50 flex-row items-center justify-evenly w-full h-32 bg-primary-400 font-bold text-xl text-text-primary-400">
            <Link href="#WB" className="text-5xl font-black">
                WB
            </Link>
            
            <div className="flex">
                <Link href="#ME" className="mx-8 hover:text-text-secundary-500">
                    ME
                </Link>
                <Link href="#SKILLS" className="mx-8 hover:text-text-secundary-500">
                    SKILLS
                </Link>
                <Link href="#PROJECTS" className="mx-8 hover:text-text-secundary-500">
                    PROJECTS
                </Link>
                <Link href="#CONTACT" className="mx-8 hover:text-text-secundary-500">
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