import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AnimationContext } from './Context'

function SectionHead({ children }) {
    const { textAnimate } = useContext(AnimationContext)
    return (
        <motion.div className='w-full flex justify-start items-start gap-5' {...textAnimate} >
            <motion.div className='w-6 h-5 mt-2 bg-dark-blue shrink-0' />
            <motion.h3>
                {children}
            </motion.h3>
        </motion.div>
    )
}

export default SectionHead