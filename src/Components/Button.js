import React from 'react'
import { motion } from 'framer-motion'

function Button({ children, style, click }) {
    return (
        <motion.button 
            className={style} 
            onClick={click} 
            initial={{
                y: "3%"
            }}
            whileInView={{
                y: "0%"
            }}
            whileHover={{
                scale: 1.03
            }}
            whileTap={{
                scale: 0.95
            }}
            >
            {children}
        </motion.button>
    )
}

export default Button