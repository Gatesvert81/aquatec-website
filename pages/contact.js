import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../src/Components/Button'
import { AnimationContext, NavContext } from '../src/Components/Context'
import Page from '../src/AnimatedComponents/Page'
import AdvantageCard from '../src/Components/AdvantageCard'
import AnchorLink from '../src/Components/AnchorLink'

function Contact() {

    const [page, setPage] = useContext(NavContext)
    const { textAnimate, imageAnimate } = useContext(AnimationContext)

    useEffect(() => {
        if (page !== "contact") setPage('contact')
    }, [])

    return (
        <Page style='pt-20 min-h-[80vh]' >
            <Head>
                <title>Aquatec | Contact</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <motion.div className='px-10 text-center' >
                <motion.h1 {...textAnimate} >
                    Contact
                </motion.h1>
            </motion.div>
            <motion.main className='grid grid-cols-1 gap-10' >
                <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-2 text-center justify-items-center '>
                    <AdvantageCard icon="email" >
                        <AnchorLink route="mailto:info@aquatecghana.com">
                            info@aquatecghana.com
                        </AnchorLink>
                    </AdvantageCard>
                    <AdvantageCard icon="phone">
                        <AnchorLink route="tel:+233302768758">
                            (+233) 302 768758/9
                        </AnchorLink>
                    </AdvantageCard>
                    <AdvantageCard icon="fax">
                        <AnchorLink route="tel:+233302768760">
                            (+233) 302 768760
                        </AnchorLink>
                    </AdvantageCard>
                </motion.div>
                <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <form className='w-full grid grid-cols-1 gap-2' >
                        <fieldset>
                            <label>
                                Full Name
                            </label>
                            <input type="text" placeholder='Gates Vert' />
                        </fieldset>
                        <fieldset>
                            <label>
                                Email
                            </label>
                            <input type="email" placeholder='gatesvert@gmail.com' />
                        </fieldset>
                        <fieldset>
                            <label>
                                Telephone Number
                            </label>
                            <input type="tel" placeholder='054126847' />
                        </fieldset>
                        <fieldset>
                            <label>
                                Message
                            </label>
                            <textarea type="text" placeholder='Gates Vert' />
                        </fieldset>
                        <fieldset>
                            <Button style=" w-full primary-btn" >
                                Send Message
                            </Button>
                        </fieldset>
                    </form>
                    <motion.div className='w-full h-40vh bg-sea-blue relative flec flex-col justify-center items-center '  >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15882.90891084092!2d-0.2156418!3d5.6072483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e6f1eb37da2da9d!2sAquatec%20Services%20Limited!5e0!3m2!1sen!2sgh!4v1661168994378!5m2!1sen!2sgh"
                            allowFullScreen loading="lazy" className="w-full h-full" ></iframe>
                        {/* <p className='absolute top-1/3 left-1/3 text-xl' >
                            Location Loading
                        </p> */}
                    </motion.div>
                </motion.div>
            </motion.main>
        </Page>
    )
}

export default Contact

