import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AnimationContext } from './Context'

function ChooseCard({ number, title, children }) {
    const { textAnimate } = useContext(AnimationContext)

    return (
        <motion.div 
            className='w-full h-fit grid grid-cols-1 gap-2' 
            {...textAnimate}
            >
            <motion.h4 className='w-full flex justify-start gap-5' >
                <motion.span className='text-light-gray' >
                    {number}
                </motion.span>
                {title}
            </motion.h4>
            <motion.p>
                {children}
            </motion.p>
        </motion.div>
    )
}

export default ChooseCard