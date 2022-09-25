import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import { motion } from 'framer-motion'
import { NavContext } from '../src/Components/Context'
import Page from '../src/AnimatedComponents/Page'
import { projects } from '../src/Assets/projects'

const ProjectCard = dynamic(() => import("../src/Components/ProjectCard"));

function Projects() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
        if (page !== "projects") setPage('projects')
    }, [])

    return (
        <Page style='pt-20' >
            <Head>
                <title>Aquatec | Projects</title>
                <meta name="description" content="Amazing Swimming Pools built by Aquatec" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <motion.div className='px-10 text-center' >
                <motion.h1>
                    Projects
                </motion.h1>
            </motion.div>
            <main className='grid grid-cols-1 md:grid-cols-2 gap-5' >
                {
                    projects.map((project, index) => (
                        <ProjectCard image={project.image} key={index} number={index + 1} >
                            {project.name}
                        </ProjectCard>
                    ))
                }
            </main>
        </Page>
    )
}

export default Projects