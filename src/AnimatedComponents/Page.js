import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Page({ children, style }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    opacity: 0.5,
                    // y: "-5%"
                }}
                animate={{
                    opacity: 1,
                    // y: "0%"
                }}
                exit={{
                    opacity: 0,
                    // y: "-5%"
                }}
                transition={{
                    delayChildren: 0.5,
                    // default: {
                    //     duration: 0.5
                    // }
                }}
                className={style}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Page