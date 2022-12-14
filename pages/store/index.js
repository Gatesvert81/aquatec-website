import React, { useContext, useState } from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from 'framer-motion'
import Page from '../../src/AnimatedComponents/Page'
import { AnimationContext } from '../../src/Components/Context'
import { InstantSearch } from "react-instantsearch-dom";
import CustomSearchBox from '../../src/Components/Searchbox'
import CustomHits from '../../src/Components/CustomHits'
import categories from '../../src/Assets/Categories'
import algoliasearch from "algoliasearch/lite";

const StoreCard = dynamic(() => import("../../src/Components/StoreCard"));
const AnchorLink = dynamic(() => import("../../src/Components/AnchorLink"));

const searchClient = algoliasearch(
    "NOTY4T8WCQ",
    "f9b2f1720e37127c427c246c2d959c55",
);

function Store() {

    const [searchFocus, setSearchFocus] = useState(false)

    const { textAnimate } = useContext(AnimationContext)

    return (
        <Page style='pt-20 min-h-[80vh]' >
            <Head>
                <title>Aquatec | Store</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <motion.div className='px-10 text-center' >
                <motion.h1 {...textAnimate} >
                    Store
                </motion.h1>
            </motion.div>
            {/* <div className="w-full p-5 flex justify-center">
                <InstantSearch
                    searchClient={searchClient}
                    indexName="dev_aquatec_store"
                >
                    <div className='w-full grid grid-cols-1' >
                        <CustomSearchBox
                            searchAsYouType={true}
                            showLoadingIndicator
                            setSearchFocus={setSearchFocus}
                        />
                        <AnimatePresence>
                            {
                                searchFocus && (
                                    <motion.div
                                        className="w-full h-fit p-5 rounded-md border-2 border-gray-300 shadow-md"
                                        initial={{
                                            opacity: 0,
                                            y: "-10%"
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: "0%"
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: "-10%"
                                        }}
                                        onBlur={() => setSearchFocus(false)}
                                    >
                                        <CustomHits />
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </div>

                </InstantSearch>
            </div> */}
            <motion.div className='p-10 text-center' >
                <motion.h4 {...textAnimate} >
                    Categories
                </motion.h4>
                <motion.p>
                    Checkout our store and reserve equipment you want to buy.
                </motion.p>
            </motion.div>
            <motion.section className='w-full flex flex-col md:grid md:grid-cols-3 justify-center items-center gap-5 md:justify-items-center' >
                {
                    categories?.map((category, index) => (
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
            </motion.section>
        </Page>
    )
}

export default Store

