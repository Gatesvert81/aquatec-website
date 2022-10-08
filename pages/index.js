import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import Page from "../src/AnimatedComponents/Page";
import { AnimationContext, NavContext } from "../src/Components/Context";

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
        className="h-screen pt-20 md:px-10 lg:px-20 pb-10 flex flex-col gap-10 justify-start md:justify-center items-center bg-dark-blue text-white"
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
            build your dream pool with a new experience
          </motion.h1>
          <motion.div>
            <motion.h3 {...textAnimate}>About Us</motion.h3>
            <motion.p {...textAnimate}>
              <span>
                Aquatec has constructed quality swimming pools for homes and
                institutions in Ghana since 1976.
              </span>
              <span className="hidden md:block">
                Additionally, Aquatec is a water industry leader with its
                products and services for industrial and residential water
                supply.
              </span>
            </motion.p>
            <motion.div className="w-full flex justify-between gap-2 items-center">
              <motion.h4 {...textAnimate}>350+ Projects</motion.h4>
              <motion.span
                {...textAnimate}
                className="w-5 h-0.5 bg-sea-blue rounded-md"
              />
              <motion.h4 {...textAnimate}>250+ Clients</motion.h4>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full h-full md:h-50vh relative rounded-tr-[15vw] rounded-tl-[15vw] overflow-hidden"
          {...textAnimate}
        >
          <Image
            src="/project-pics/home-pool.webp"
            priority={true}
            alt="Dream pool"
            layout="fill"
            className="object-cover"
          />
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
          <ChooseCard number="01" title="The best price">
            Because of our affordable prices, we are never knowingly undersold.
            We will always match any Price.
          </ChooseCard>
          <ChooseCard number="02" title="Reliable">
            Our shelves are always stocked with the quality materials you need
            and always available for you to purchase.
          </ChooseCard>
          <ChooseCard number="03" title="Quality Assurance">
            In partner with top quality brands such as DAB, Fountains Direct and
            many others, we ensure our pools do not only last long but also feel
            fresh and new everytime you take a swim in it.
          </ChooseCard>
          <ChooseCard number="04" title="Professionality">
            Our expertise are not only qualified but capable to give you the
            right advice for our DIY ( Do It Yourself ) customers.
          </ChooseCard>
        </motion.div>
      </motion.section>
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
        <motion.div className="w-full md:h-40vh flex flex-col md:flex-row justify-center items-center gap-5 rounded-tl-[15vw] rounded-br-[15vw] overflow-hidden ">
          <ProjectCard image="movinpic.webp" />
          <ProjectCard image="plant-house.webp" />
          <ProjectCard image="residence.webp" />
        </motion.div>
      </motion.section>

      <Video />

      <ReviewSection />
    </Page>
  );
}
