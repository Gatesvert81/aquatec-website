import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AnimationContext } from './Context'
import Image from 'next/image'

function ProjectCard({ children, image, number }) {
    const { imageAnimate } = useContext(AnimationContext)

    return (
        <motion.div className='w-full h-30vh md:h-60vh relative overflow-hidden bg-gray-400 '  >
            <motion.div
                className='w-full h-full bg-gray-300'
                {...imageAnimate}
            >
                <Image src={`/project-pics/${image}`} alt='Dream pool' layout='fill' className='object-cover' />
            </motion.div>
            <motion.div
                className='w-full h-fit flex flex-col gap-2 left-0 absolute bottom-0  px-2 transition duration-500  bg-white/70 '
                initial={{
                    bottom: "-100%",
                    opacity: 0
                }}
                animate={{
                    bottom: "0%",
                    opacity: 1
                }}
                exit={{
                    bottom: "-100%",
                    opacity: 0
                }}
                transition={{
                    bounceDamping: 0,
                    default: {
                        duration: 0.3
                    }
                }}                        >
                <motion.h6 className='flex md:justify-between justify-start gap-5' >
                    <motion.span className='text-light-gray ' >
                        0{number}
                    </motion.span>
                    <motion.span>
                        {children}
                    </motion.span>
                </motion.h6>
            </motion.div>
        </motion.div>
    )
}

export default ProjectCard