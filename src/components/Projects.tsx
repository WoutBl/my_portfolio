import {Carousel} from 'react-responsive-carousel';
import Link from "next/link"
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import { ChevronRightIcon } from 'lucide-react'
import { IProject } from '../interfaces/IProject'
import Image from 'next/image'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default ({projects }: { projects: IProject[] }) => {
    // Sort the projects by date
    // projects.sort((a, b) => {
    //   return new Date(b.date).getTime() - new Date(a.date).getTime()
    // })
    console.log(projects)
    return (
        // <Carousel>
        //     <div>
        //         <Link href="#ME" className="mx-8 hover:text-text-secundary-500">
        //             ME
        //         </Link>
        //     </div>
        //     <div>
        //         <Link href="#ME" className="mx-8 hover:text-text-secundary-500">
        //             ME
        //         </Link>
        //     </div>
        //     <div>
        //         <Link href="#ME" className="mx-8 hover:text-text-secundary-500">
        //             ME
        //         </Link>
        //     </div>
        // </Carousel>
        <Splide
          className="splide__carousel h-1/2 !visible"
          options={{
            type: 'loop',
            perPage: 1,
            focus: 'center',
            perMove: 1,
            wheel: true,
            padding: '5rem',
            pagination: false,
            
          }}
        >
            <div className="absolute left-2 sm:left-14 lg:left-24 xl:left-28">
              <button className="splide__arrow--prev rounded-full bg-own-neutral-800 p-2  opacity-60 shadow-lg ring-own-neutral-300 focus:outline-none focus-visible:ring-2 dark:bg-own-neutral-200 dark:ring-white ">
                <ChevronRightIcon className="stroke-own-neutral-100 dark:stroke-slate-900" />
              </button>
            </div>
          
            {/* use map to render the rest of the projects */}
            {projects.map((project, index) => {
              return (
                <SplideSlide key={index} className="splide__slide-carousel">
                  <Link
                    href='#ME'
                    className="group/card focus:outline-none"
                  >
                    <div className="flex flex-col justify-center gap-2 group-focus-visible/card:ring-2 group-focus-visible/card:ring-slate-100 dark:group-focus-visible/card:ring-slate-600">
                      <div className="group/img relative overflow-hidden rounded-own-md">
                        <Image
                          src={`${project.image}`}
                          alt={project.name}
                          width={500}
                          height={300}
                        />
                        <p className="img-hover__text absolute inset-0 flex h-full flex-col items-center justify-center bg-own-neutral-900 bg-opacity-70 text-xl font-semibold text-own-neutral-200 opacity-0 transition duration-500 ease-in-out group-hover/img:opacity-100 dark:text-own-neutral-100 sm:text-lg md:text-xl xl:text-xl">
                          Read more
                        </p>
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

          {/* Carousel Arrows */}
          <div className="splide__arrows  bottom-1/2 left-0 right-0 z-50 flex w-full -translate-y-[60px]  justify-center px-2">
            <div className="absolute left-2 sm:left-14 lg:left-24 xl:left-28">
              <button className="splide__arrow--prev rounded-full bg-own-neutral-800 p-2  opacity-60 shadow-lg ring-own-neutral-300 focus:outline-none focus-visible:ring-2 dark:bg-own-neutral-200 dark:ring-white ">
                <ChevronRightIcon className="stroke-own-neutral-100 dark:stroke-slate-900" />
              </button>
            </div>
            <div className=" right-2 sm:right-14 lg:right-24 xl:right-28">
              <button className="splide__arrow--next rounded-full bg-own-neutral-800 p-2 opacity-60 shadow-lg ring-own-neutral-300 focus:outline-none focus-visible:ring-2 dark:bg-own-neutral-200 dark:ring-white ">
                <ChevronRightIcon className="stroke-own-neutral-100 dark:stroke-slate-900" />
              </button>
            </div>
          </div>
        </Splide>
    )
}