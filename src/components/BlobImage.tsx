import { motion, useReducedMotion } from 'framer-motion'
import { blobFadeInGrow, blobMorph } from '../animation/animation'
import Image from 'next/image'

export default ({ src: srcImg, alt: altImg }: { src: string; alt: string }) => {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={shouldReduceMotion ? 'visible' : 'initial'}
      whileInView={shouldReduceMotion ? 'visible' : 'animation'}
      variants={blobFadeInGrow}
    >
      <motion.div
        className=" h-56 w-56 cursor-pointer overflow-hidden rounded-full
                        bg-gradient-to-r from-own-secondary to-own-secondary-800  sm:h-64 sm:w-64  lg:h-80 lg:w-80 xl:h-96 xl:w-96"
        initial={shouldReduceMotion ? 'visible' : 'initial'}
        whileInView={shouldReduceMotion ? 'visible' : 'animation'}
        variants={blobMorph}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        dragElastic={0.7}
      >
        <Image src={"/ME.png"}
              alt={"Picture Wout Blomme"}
              width={300}
              height={200}/>
      </motion.div>
    </motion.div>
  )
}
