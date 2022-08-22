import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AnimationContext } from './Context'
import Image from 'next/image'

function AdvantageCard({ children, icon }) {
    const { textAnimate } = useContext(AnimationContext)

    return (
        <motion.div className='w-64 h-28 flex flex-col justify-center items-center text-center rounded-lg ' {...textAnimate} >
            <motion.div className='icon' >
                <Image src={`/icons/${icon}.png`} alt='Dream pool' layout='fill' className='object-contain' />
            </motion.div>
            <motion.p>
                {children}
            </motion.p>
        </motion.div>
    )
}

export default AdvantageCard