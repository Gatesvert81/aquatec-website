import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AnimationContext } from './Context'

function SectionHead({ children }) {
    const { textAnimate } = useContext(AnimationContext)
    return (
        <motion.div className='w-full flex justify-start items-center gap-5' {...textAnimate} >
            <motion.div className='w-6 h-5 bg-dark-blue' />
            <motion.h3>
                {children}
            </motion.h3>
        </motion.div>
    )
}

export default SectionHead