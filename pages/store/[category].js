import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Page from '../../src/AnimatedComponents/Page'
import { AnimationContext } from '../../src/Components/Context'
import categories from '../../src/Assets/Categories'
import Image from 'next/image'
import Button from '../../src/Components/Button'
import StoreCard from '../../src/Components/StoreCard'

function Category({ category }) {

    const [order, setOrder] = useState(false)

    const { textAnimate, imageAnimate } = useContext(AnimationContext)


    const router = useRouter()

    useEffect(() => {
        console.log(category)
    }, [])

    const title = `Store | ${category?.name}`


    return (
        <Page style='pt-20 min-h-[80vh]' >
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <motion.div className='px-10 text-center' >
                <motion.h1 {...textAnimate} >
                    {category?.name}
                </motion.h1>
            </motion.div>
            <motion.div className='px-10 flex gap-1' >
                <motion.p
                    className='font-semibold cursor-pointer'
                    onClick={() => router.back()}
                >
                    Store
                </motion.p>
                <motion.p>
                    &gt;
                </motion.p>
                <motion.p className='font-semibold capitalize'>
                    {category?.name}
                </motion.p>
            </motion.div>
            <motion.section className='w-full h-fit md:h-50vh grid grid-cols-1 md:grid-cols-2 gap-5' >
                <motion.div className='w-full h-30vh md:h-full  relative overflow-hidden' >
                    <motion.div className='w-full h-full' {...imageAnimate} >
                        <Image src={`/product-pics/${category?.mainImage}`} alt={category?.name} layout='fill' className='object-cover' />
                    </motion.div>
                </motion.div>
                <motion.div className='flex flex-col gap-5' >
                    <motion.h3>
                        description
                    </motion.h3>
                    <motion.p>
                        {category?.description}
                    </motion.p>
                    <Button
                        style="primary-btn w-full"
                        click={() => setOrder(!order)}
                    >
                        Order to Reserve
                    </Button>
                </motion.div>
            </motion.section>
            <motion.section className='flex flex-col md:grid md:grid-cols-3 justify-center items-center gap-5 md:justify-items-center' >
                {
                    category?.subCategories?.map((subcategory, index) => (
                        <motion.div
                            className='w-60 h-60 bg-blue-400 overflow-hidden text-center rounded-md pb-3'
                            {...textAnimate}
                            key={`${subcategory.name} ${index}`}>
                            <motion.div className='w-full h-4/5 relative' {...imageAnimate} >
                                <Image src={`/product-pics/${subcategory.images[0]}`} alt='Dream pool' layout='fill' className='object-cover' />
                            </motion.div>
                            <motion.h6  >
                                {subcategory.name}
                            </motion.h6>
                        </motion.div>
                    ))
                }
            </motion.section>
            <AnimatePresence>
                {
                    order && (
                        <motion.div
                            className='w-full h-full flex flex-col justify-center items-center bg-black/70 rounded-md fixed z-20 top-0 left-0'
                            initial={{
                                opacity: 0,
                                scale: 0.95
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.05
                            }}
                        >
                            <form
                                className='w-80 h-fit p-5 bg-white rounded-md grid grid-cols-1 gap-2'
                                onSubmit={(e) => e.preventDefault()}
                            >
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
                                <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-2 ' >
                                    <Button
                                        style=" w-full primary-btn"
                                        click={() => setOrder(!order)}
                                    >
                                        Request Reservation
                                    </Button>
                                    <Button
                                        style=" w-full secondary-btn border-red-400 text-red-400 "
                                        click={() => setOrder(!order)}
                                    >
                                        Cancel
                                    </Button>
                                </fieldset>
                            </form>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </Page>
    )
}

export default Category

export async function getStaticPaths() {
    // Get the paths we want to pre-render based on categorys
    const paths = categories.map((category) => ({
        params: { category: category?.name },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the category `category`.
    // If the route is like /category/1, then params.category is 1
    const category = categories?.filter((cat) => (
        cat?.name === params?.category
    ))
    // Pass category data to the page via props
    return {
        props: {
            category: category[0]
        }
    }
}
