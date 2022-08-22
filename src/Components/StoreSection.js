import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import SectionHead from './SectionHead'
import StoreCard from './StoreCard'
import AnchorLink from './AnchorLink'

function StoreSection() {
    return (
        <motion.section className='w-full flex flex-col  gap-5'>
            <motion.div className='w-full flex flex-col md:flex-row justify-between items-center gap-3' >
                <SectionHead>
                    shop in our online store
                </SectionHead>
                <div className='md:w-1/6 self-end' >
                    <AnchorLink route="https://www.foodandagriculturelaw.com/aquatec" pass target >
                        <Button style=" self-end md:w-full primary-btn" >
                            View Store
                        </Button>
                    </AnchorLink>
                </div>
            </motion.div>
            <motion.div className='w-full flex flex-col md:grid md:grid-cols-3 justify-center items-center gap-5 md:justify-items-center' >
                <StoreCard image="tiles.webp" >
                    Tiles
                </StoreCard>
                <StoreCard image="pumps.JPG" >
                    Water Pump
                </StoreCard>
                <StoreCard image="handrail.webp" >
                    Handrails
                </StoreCard>
                <StoreCard image="pool filter.jpg" >
                    Filters
                </StoreCard>
            </motion.div>
        </motion.section>
    )
}

export default StoreSection