import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import Page from "../src/AnimatedComponents/Page";
import { AnimationContext, NavContext } from "../src/Components/Context";
import ImageSlider from "../src/Components/ImageSlider";

const AgencySection = dynamic(() => import("../src/Components/AgencySection"));
const Button = dynamic(() => import("../src/Components/Button"));
const Video = dynamic(() => import("../src/Components/Video"));
const ChooseCard = dynamic(() => import("../src/Components/ChooseCard"));
const ProjectCard = dynamic(() => import("../src/Components/ProjectCard"));
const ReviewSection = dynamic(() => import("../src/Components/ReviewSection"));
const SectionHead = dynamic(() => import("../src/Components/SectionHead"));
const AnchorLink = dynamic(() => import("../src/Components/AnchorLink"));
const StoreSection = dynamic(() => import("../src/Components/StoreSection"));

export default function Home() {
  const [page, setPage] = useContext(NavContext);
  const { textAnimate } = useContext(AnimationContext);

  useEffect(() => {
    if (page !== "home") setPage("home");
  }, []);

  return (
    <Page>
      <Head>
        <title>Aquatec | Home</title>
        <meta
          name="description"
          content="Aquatec Services Limited- Swimming pool construction and equipment sales center"
        />
        <meta
          name="keywords"
          content="Aquatec Services Limited, Swimming pool construction, Pool services,Swimming pool equipments shop, DAB Equipments"
        />
        <link rel="icon" href="/icons/logo.png" />
      </Head>

      <motion.main
        layout
        className="h-screen pt-20 md:px-10 lg:px-20 pb-10 flex flex-col gap-10 justify-start md:justify-center items-center bg-dark-blue text-white "
      >
        <motion.div
          layout
          className="w-full flex flex-col md:flex-row gap-10 justify-center items-center "
          animate={{
            transition: {
              delayChildren: 0.8,
            },
          }}
        >
          <motion.h1
            className="text-center text-4xl uppercase md:text-left"
            {...textAnimate}
          >
            Everything Swimming Pools and water pumps
          </motion.h1>
          <motion.div>
            <motion.h3 {...textAnimate}>About Us</motion.h3>
            <motion.p {...textAnimate}>
              <span>
                Aquatec is a leader in the water industry selling residential
                and industrial water pumps.
              </span>
            </motion.p>
            <motion.div className="w-full flex justify-between gap-2 items-center">
              <motion.h4 {...textAnimate}>
                350+ Projects <span className="text-xl font-normal">completed for satisfied clients</span> 
              </motion.h4>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full h-full md:h-50vh relative overflow-hidden grid grid-cols-2 "
          {...textAnimate}
        >
          {/* <ImageSlider slides={["/project-pics/home-pool.webp", "/product-pics/water-pressure.jpg"]} /> */}
          <div className="w-full h-full relative">
            <Image
              src="/project-pics/home-pool.webp"
              priority={true}
              alt="Dream pool"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-full h-full bg-white relative">
            <Image
              src="/product-pics/landing-image.jpg"
              priority={true}
              alt="Dream pool"
              layout="fill"
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.main>

      <motion.section
        className="flex flex-col gap-10"
        transition={{
          delayChildren: 0.2,
        }}
      >
        <SectionHead>Why choose us</SectionHead>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          transition={{
            delayChildren: 0.2,
          }}
        >
          <ChooseCard number="01" title="Quality Assurance">
            Our partnership with top brands like Astral Pool, DAB, Fountains
            Direct and others, ensures that our products are of top quality.
          </ChooseCard>
          <ChooseCard number="02" title="Professionalism">
            Our experts are not only qualified and capable in giving good advise
            to our DIY (Do It Yourself) customers.
          </ChooseCard>
          <ChooseCard number="03" title="Reliable">
            Our showroom and warehouses are always fully stocked.
          </ChooseCard>
          <ChooseCard number="04" title="The best price">
            Our prices are affordable and competitive.
          </ChooseCard>
        </motion.div>
      </motion.section>
      <AgencySection />
      <StoreSection />
      <motion.section className="w-full flex flex-col  gap-5">
        <motion.div className="w-full flex flex-col md:flex-row justify-between items-center">
          <SectionHead>Some of our Projects</SectionHead>
          <div className="md:w-1/6 self-end">
            <AnchorLink route="/projects">
              <Button style=" md:w-full primary-btn">View all</Button>
            </AnchorLink>
          </div>
        </motion.div>
        <motion.div className="w-full md:h-40vh flex flex-col md:flex-row justify-center items-center gap-5 overflow-hidden ">
          <ProjectCard image="movinpic.webp" />
          <ProjectCard image="plant-house.webp" />
          <ProjectCard image="residence.webp" />
        </motion.div>
      </motion.section>

      <Video />

      {/* <ReviewSection /> */}
    </Page>
  );
}
