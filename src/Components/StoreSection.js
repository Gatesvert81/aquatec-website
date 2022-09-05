import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import SectionHead from './SectionHead'
import StoreCard from './StoreCard'
import AnchorLink from './AnchorLink'
import categories from '../Assets/Categories'

function StoreSection() {

    const storeCategories = categories.filter((category, index) => (
        index <= 4
    ))

    return (
        <motion.section className='w-full flex flex-col  gap-5'>
            <motion.div className='w-full flex flex-col md:flex-row justify-between items-center gap-3' >
                <SectionHead>
                    shop in our online store
                </SectionHead>
                <div className='md:w-1/6 self-end' >
                    <AnchorLink route="/store" >
                        <Button style=" self-end md:w-full primary-btn" >
                            View Store
                        </Button>
                    </AnchorLink>
                </div>
            </motion.div>
            <motion.div className='w-full flex flex-col md:grid md:grid-cols-3 justify-center items-center gap-5 md:justify-items-center' >
                {
                    storeCategories?.map((category, index) => (
                        <AnchorLink 
                            route={`/store/${category.name}`} 
                            key={`${category.name} ${index}`}>
                            <StoreCard
                                image={category.mainImage}
                                
                            >
                                {category.name}
                            </StoreCard>
                        </AnchorLink>
                    ))
                }
            </motion.div>
        </motion.section>
    )
}

export default StoreSection