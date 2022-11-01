import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimationContext, NavContext } from "../src/Components/Context";
import Page from "../src/AnimatedComponents/Page";

const AgencySection = dynamic(() => import("../src/Components/AgencySection"))
const SectionHead = dynamic(() => import("../src/Components/SectionHead"));
const AdvantageCard = dynamic(() => import("../src/Components/AdvantageCard"));
const AnchorLink = dynamic(() => import("../src/Components/AnchorLink"));
const StoreSection = dynamic(() => import("../src/Components/StoreSection"));

function About() {
  const [page, setPage] = useContext(NavContext);
  const { textAnimate, imageAnimate } = useContext(AnimationContext);

  useEffect(() => {
    if (page !== "about") setPage("about");
  }, []);

  return (
    <Page style="pt-20">
      <Head>
        <title>Aquatec | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/logo.png" />
      </Head>
      <motion.div className="px-10 text-center">
        <motion.h1 {...textAnimate}>About us</motion.h1>
      </motion.div>
      <motion.section className="grid md:grid-cols-2 gap-5">
        <motion.div className="w-full flex flex-col justify-center h-full">
          <motion.p {...textAnimate}>
            AQUATEC was established in 1976 to cater for the swimming pool
            industry in Ghana. We have since branched out into other areas of
            the water industry such as industrial and residential water equipment,
            with its related equipment, including pump sets and irrigation
            equipment.
          </motion.p>
        </motion.div>
        <motion.div className="w-full h-40vh  relative overflow-hidden">
          <motion.div className="w-full h-full" {...imageAnimate}>
            <Image
              src="/project-pics/aquatec-palace.jpg"
              alt="Dream pool"
              layout="fill"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="grid md:grid-cols-2 gap-5 ">
        <motion.div className="w-full h-40vh  relative overflow-hidden">
          <motion.div className="w-full h-full" {...imageAnimate}>
            <Image
              src="/project-pics/fountain.webp"
              alt="Dream pool"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
        <motion.div className="w-full flex flex-col justify-center h-full">
          <motion.p {...textAnimate}>
            At AQUATEC we construct state of the art swimming pools and water
            features, and have a retail and wholesale division dealing in
            swimming pool and fountain equipment, pool chemicals and domestic
            and industrial water pump sets.
          </motion.p>
        </motion.div>
      </motion.section>
      <motion.section className="grid md:grid-cols-2 gap-5 ">
        <motion.div className="w-full flex flex-col justify-center h-full">
          <motion.p {...textAnimate}>
            AQUATEC is the Leader in Ghana&#39;s Swimming Pool Industry. Our
            pools are constructed with the highest quality premix concrete and
            fitted with pool equipment manufactured by fluidra, the worlds&#39;
            largest manufacturer of premier pool products. Our pool shells carry
            a ten (10) year warranty.
          </motion.p>
        </motion.div>
        <motion.div className="w-full h-40vh  relative overflow-hidden">
          <motion.div className="w-full h-full" {...imageAnimate}>
            <Image
              src="/project-pics/anderson-pool.jpg"
              alt="Dream pool"
              layout="fill"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="flex flex-col gap-5">
        <SectionHead>board of Directors</SectionHead>
        <motion.div className="grid gris-cols-1 md:grid-cols-3 gap-5">
          <motion.div className="text-center" {...textAnimate}>
            <motion.h5>Mr. Sandy Anderson</motion.h5>
            <motion.h6 className="text-black/60">
              Founder, Executive Chairman
            </motion.h6>
          </motion.div>
          <motion.div className="text-center" {...textAnimate}>
            <motion.h5>Mr. Eddy Duplan</motion.h5>
            <motion.h6 className="text-black/60">Managing Director</motion.h6>
          </motion.div>
          <motion.div className="text-center" {...textAnimate}>
            <motion.h5>Mr. Stuart Anderson</motion.h5>
            <motion.h6 className="text-black/60">General Manager</motion.h6>
          </motion.div>
        </motion.div>
      </motion.section>
     <AgencySection /> 
      <StoreSection />
      <section>
        <SectionHead>Come see us</SectionHead>
        <motion.div>
          <motion.div className="grid md:grid-cols-2 gap-5">
            <motion.div className="w-full flex flex-col justify-center h-full">
              <motion.p {...textAnimate}>
                A visit to our showroom brings our clients face to face with our cheerful and confident customer care team. They assist clients to decide on exactly what products will suit their needs. Those who already know what they are looking for are looked after with speed and courtesy.
              </motion.p>
            </motion.div>
            <motion.div className="w-full h-40vh  relative overflow-hidden">
              <motion.div className="w-full h-full" {...imageAnimate}>
                <Image
                  src="/project-pics/aquatec-showroom.webp"
                  alt="Dream pool"
                  layout="fill"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full h-fit flex gap-3 md:flex-row flex-col md:flex-wrap justify-center items-center  "
          animate={{
            transition: {
              delayChildren: 0.5,
            },
          }}
          transition={{
            delayChildren: 0.5,
          }}
        >
          <AdvantageCard icon="service">
            We install our equipment upon request.
          </AdvantageCard>
          <AdvantageCard icon="product">
            We are always fully stocked with our Products and Spare Parts.
          </AdvantageCard>
          <AdvantageCard icon="sales">
            We provide After Sales Service.
          </AdvantageCard>
          <AdvantageCard icon="constructor">
            We provide Professional Advice to DIY (do it yourself) Customers.
          </AdvantageCard>
        </motion.div>
      </section>
    </Page>
  );
}

export default About;
