
import { Github, Linkedin, Mail } from 'lucide-react'


export default ({}) => {
    return (
        
        <div className="grid grid-flow-col gap-4 items-center">
                
                {/* Mail, LinkedIn, GitHub */}
                <a
                  href="mailto:wout.blomme@hotmail.com"
                  className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/wout-blomme-aa8754277/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                </a>
                <a
                  href="https://github.com/WoutBl"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6 stroke-own-neutral-900 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                </a>
                <div className=' ml-40'>
                    Contact Me
                </div>
              </div>
    )
}