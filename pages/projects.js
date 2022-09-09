import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import ProjectCard from '../src/Components/ProjectCard'
import { NavContext } from '../src/Components/Context'
import Page from '../src/AnimatedComponents/Page'
import { projects } from '../src/Assets/projects'


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
            <main className='grid grid-cols-1 gap-5' >
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