import {Carousel} from 'react-responsive-carousel';
import Link from "next/link"
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { IProject } from '../interfaces/IProject'
import Image from 'next/image'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useRouter } from 'next/router';

export default ({projects }: { projects: IProject[] }) => {
      
    return (
        <div className='relative'>
        <div className="absolute bottom-0 left-0 top-0 z-0 h-full bg-gradient-to-r from-own-neutral-0 to-transparent dark:from-own-neutral-900 sm:w-10 md:w-28 lg:w-36 xl:w-60" />
        <div className="absolute bottom-0 right-0 top-0 z-0 h-full bg-gradient-to-l from-own-neutral-0 to-transparent dark:from-own-neutral-900 sm:w-10 md:w-28 lg:w-36 xl:w-60" />
        <Splide
          className="splide__carousel h-1/2 !visible"
          options={{
            type: 'loop',
            perPage: 2,
            focus: 'center',
            perMove: 1,
            wheel: true,
            padding: '1rem',
            pagination: false,
            arrows: true,
          }}
        >
            {/* use map to render the rest of the projects */}
            {projects.map((project, index) => {
              return (
                <SplideSlide key={index} className="splide__slide-carousel flex justify-center">
                  <Link
                    href='#WB'
                    className="group/card focus:outline-none"
                  >
                    <div className="flex flex-col justify-center gap-2 group-focus-visible/card:ring-2 group-focus-visible/card:ring-slate-100 dark:group-focus-visible/card:ring-slate-600">
                      <div className="group/img relative overflow-hidden rounded-xl">
                        <Image
                          src={`${project.image}`}
                          alt={project.name}
                          width={500}
                          height={300}
                        />
                        {/* <p className="img-hover__text absolute inset-0 flex h-full flex-col items-center justify-center bg-own-neutral-900 bg-opacity-70 text-xl font-semibold text-own-neutral-200 opacity-0 transition duration-500 ease-in-out group-hover/img:opacity-100 dark:text-own-neutral-100 sm:text-lg md:text-xl xl:text-xl">
                          Read more
                        </p> */}
                      </div>
                      <div className="img__text flex flex-col">
                        <h3 className="text-xl font-semibold text-own-neutral-900 dark:text-own-neutral-200 sm:text-lg md:text-xl xl:text-xl">
                          {project.name}
                        </h3>
                        <p className="text-md font-medium text-own-neutral-400 dark:text-own-neutral-300 sm:text-base md:text-lg xl:text-lg">
                          {project.tag}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SplideSlide>
              )
            })}

          
          
        </Splide>
        
        </div>
        
    )
}