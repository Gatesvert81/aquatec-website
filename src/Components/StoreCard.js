import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimationContext } from './Context'

function StoreCard({ children, image }) {
    const { textAnimate, imageAnimate } = useContext(AnimationContext)
    return (
        <motion.div
            className='w-60 h-60 bg-blue-300 rounded-full cursor-pointer overflow-hidden'
            {...textAnimate}
        >
            <motion.div className='w-full h-full  relative overflow-hidden' >
                <motion.div className='w-full h-full' {...imageAnimate} >
                    <Image src={`/product-pics/${image}`} alt='Dream pool' layout='fill' className='object-cover' />
                </motion.div>
            </motion.div>
            <motion.div 
                className='w-full h-full absolute top-0 left-0 z-10 flex flex-col justify-center items-center bg-dark-blue/40 -rotate-12 text-light-white hover:-translate-x-8 hover:translate-y-8 transition duration-500 ease-in-out rounded-full overflow-hidden' 
                >
                <motion.h3 {...textAnimate} className="text-center" >
                    {children}
                </motion.h3>
            </motion.div>
        </motion.div>
    )
}

export default StoreCard