import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimationContext } from './Context'
import Image from 'next/image'

function ProjectCard({ children, image }) {
    const { imageAnimate } = useContext(AnimationContext)

    const [hover, setHover] = useState(false)

    useEffect(() => {
        console.log(hover)
    }, [hover])


    return (
        <motion.div className='w-full h-30vh md:h-60vh relative overflow-hidden ' onClick={() => setHover(!hover)} >
            <motion.div
                className='w-full h-full'
                {...imageAnimate}
            >
                <Image src={`/project-pics/${image}`} alt='Dream pool' layout='fill' className='object-cover' />
            </motion.div>
            <AnimatePresence>
                {
                    !hover && (
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
                                    01
                                </motion.span>
                                <motion.span>
                                    Movinpic Hotel
                                </motion.span>
                                <motion.span className='hidden md:flex'>
                                    Accra, Ghana
                                </motion.span>
                                <motion.span className='hidden md:flex'>
                                    2005
                                </motion.span>
                            </motion.h6>
                        </motion.div>
                    )}
            </AnimatePresence>
            <AnimatePresence>
                {
                    hover && (
                        <motion.div
                            className='h-full flex flex-col justify-center items-center gap-2 left-0 absolute top-0  px-2 transition duration-500  bg-white/70 '
                            initial={{
                                // top: "0%",
                                // left: "0%",
                                opacity: 0,
                                scale: 0.8
                            }}
                            animate={{
                                // top: "0%",
                                // left: "0%",
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                // top: "0%",
                                // left: "0%",
                                opacity: 0,
                                scale: 0.8
                            }}
                        >
                            <motion.h6 className='flex md:justify-between justify-start gap-5 ' >
                                <motion.span className='text-black/50 ' >
                                    01
                                </motion.span>
                                <motion.span>
                                    Movinpic Hotel
                                </motion.span>
                                <motion.span className={`'${hover ? "block" : "hidden"} md:flex'`}>
                                    Accra, Ghana
                                </motion.span>
                                <motion.span className={`'${hover ? "block" : "hidden"} md:flex'`}>
                                    2005
                                </motion.span>
                            </motion.h6>
                            <motion.p>
                                {children}
                            </motion.p>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default ProjectCard