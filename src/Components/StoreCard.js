import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimationContext } from './Context'

function StoreCard({ children, image }) {
    const { textAnimate, imageAnimate } = useContext(AnimationContext)
    return (
        <motion.div
            className='w-60 h-60 bg-blue-300 rounded-full overflow-hidden'
            {...textAnimate}
        >
            <motion.div className='w-full h-full  relative overflow-hidden' >
                <motion.div className='w-full h-full' {...imageAnimate} >
                    <Image src={`/project-pics/${image}`} alt='Dream pool' layout='fill' className='object-cover' />
                </motion.div>
            </motion.div>
            <motion.div className='w-full h-full absolute top-0 left-0 z-10 flex flex-col justify-center items-center bg-dark-blue/30 -rotate-12 text-light-white' >
                <motion.h3 {...textAnimate} >
                    {children}
                </motion.h3>
            </motion.div>
        </motion.div>
    )
}

export default StoreCard