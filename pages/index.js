import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import Button from '../src/Components/Button'
import ChooseCard from '../src/Components/ChooseCard'
import { NavContext } from '../src/Components/Context'
import ProjectCard from '../src/Components/ProjectCard'
import ReviewSection from '../src/Components/ReviewSection'
import SectionHead from '../src/Components/SectionHead'
import StoreCard from '../src/Components/StoreCard'

export default function Home() {

  const [page, setPage] = useContext(NavContext)

  useEffect(() => {
    if (page !== "home") setPage('home')
  }, [])


  return (
    <div>
      <Head>
        <title>Aquatec | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen pt-20 px-10 pb-10 flex flex-col gap-10 justify-start items-center bg-dark-blue text-white' >
        <div className='w-full flex flex-col gap-10 justify-center items-center ' >
          <h1 className='text-center uppercase' >
            build your dream pool with a new experience
          </h1>
          <div>
            <h3>
              About Us
            </h3>
            <p>
              Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations and automated insights in one click.
            </p>
            <div className='w-full flex justify-between gap-2 items-center' >
              <h4>
                350+ Projects
              </h4>
              <span className='w-5 h-0.5 bg-green-300 rounded-md' />
              <h4>
                250+ Clients
              </h4>
            </div>
          </div>
          <div className='w-full h-30vh bg-gray' >
            Image
          </div>
        </div>
      </main>

      <section className='flex flex-col gap-10' >
        <SectionHead>
          Why choose us
        </SectionHead>
        <div className='grid grid-cols-1 gap-5' >
          <ChooseCard number="01" title="The best price" >
            Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations and automated insights in one click.
          </ChooseCard>
          <ChooseCard number="02" title="The best price" >
            Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations and automated insights in one click.
          </ChooseCard>
          <ChooseCard number="03" title="The best price" >
            Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations and automated insights in one click.
          </ChooseCard>
          <ChooseCard number="04" title="The best price" >
            Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations and automated insights in one click.
          </ChooseCard>
        </div>
      </section>
      <section className='w-full flex flex-col  gap-5'>
        <div>
          <SectionHead>
            shop in our online store
          </SectionHead>
          <Button>
            View Store
          </Button>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5' >
          <StoreCard>
            Tiles
          </StoreCard>
          <StoreCard>
            Water Pump
          </StoreCard>
          <StoreCard>
            Handrails
          </StoreCard>
          <StoreCard>
            Filters
          </StoreCard>
        </div>
      </section>
      <section className='w-full flex flex-col  gap-5'>
        <div>
          <SectionHead>
            Some of our Projects
          </SectionHead>
          <Button>
            View all
          </Button>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5 rounded-tl-[2000px] rounded-br-[5000px] overflow-hidden'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      <section className='h-80vh bg-blue-400' >

      </section>
      <ReviewSection />
    </div>
  )
}
