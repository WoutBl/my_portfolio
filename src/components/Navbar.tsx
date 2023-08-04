import { motion } from "framer-motion"
import { Download } from "lucide-react"
import NavLink from "./NavLink"
import Link from "next/link"

const Navigation = ({
    selectedSection,
    setSelectedSection,
    setSidebarOpen,
    isMobile = false,
  }: {
    selectedSection: string
    setSelectedSection: (section: string) => void
    setSidebarOpen?: (open: boolean) => void
    isMobile?: boolean
  }) => {
    
    
    
    return (
        <div className="flex fixed flex-row items-center justify-evenly w-full h-32 bg-primary-400 font-bold text-xl text-text-primary-400">
            <Link href="#WB" className="text-5xl font-black">
                WB
            </Link>
            
            <div className="flex">
                <Link href="#ME" className="mx-8 ">
                    ME
                </Link>
                <Link href="#SKILLS" className="mx-8">
                    SKILLS
                </Link>
                <Link href="#PROJECTS" className="mx-8">
                    PROJECTS
                </Link>
                <Link href="#CONTACT" className="mx-8">
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