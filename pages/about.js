import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimationContext, NavContext } from "../src/Components/Context";
import Page from "../src/AnimatedComponents/Page";

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
            AQUATEC was established in 1976 to cater for the Swimming Pool
            Industry in Ghana. We have since branched out into other areas of
            the Water Industry such as Industrial and Residential Water Supply,
            with its related Equipment, including Pump Sets and Irrigation
            Equipment.
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
            At AQUATEC we also construct state of the art Swimming Pools and
            Water Features, and have a Retail and Wholesale Division dealing in
            Swimming Pool and Fountain Equipment, Pool Chemicals and Domestic
            and Industrial Water Pump Sets.
          </motion.p>
        </motion.div>
      </motion.section>
      <motion.section className="grid md:grid-cols-2 gap-5 ">
        <motion.div className="w-full flex flex-col justify-center h-full">
          <motion.p {...textAnimate}>
            AQUATEC is still the Leader in Ghana&#39;s Swimming Pool Industry.
            Our Pools are constructed with the highest quality Premix Concrete
            and fitted with Pool Equipment manufactured by Fluidra, the
            worlds&#39; largest manufacturer of Premier Pool Products. Our Pool
            Shells carry a Ten Year Warranty.
          </motion.p>
        </motion.div>
        <motion.div className="w-full h-40vh  relative overflow-hidden">
          <motion.div className="w-full h-full" {...imageAnimate}>
            <Image
              src="/project-pics/cantoment-pool.jpg"
              alt="Dream pool"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="flex flex-col gap-5">
        <SectionHead>board of Directors</SectionHead>
        <motion.div className="grid gris-cols-1 md:grid-cols-3 gap-5">
          <motion.div className="text-center" {...textAnimate}>
            <motion.h5>Mr. Sandy Anderson</motion.h5>
            <motion.h6 className="text-black/60">Founder, ceo</motion.h6>
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
      <motion.section>
        <SectionHead>our Agencies</SectionHead>
        <motion.div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
          <motion.div className="w-full h-32 relative">
            <motion.div className="w-full h-full" {...imageAnimate}>
              <AnchorLink route="https://www.fluidra.com/" pass target>
                <Image
                  src="/FLUIDRA.png"
                  alt="FLUIDRA"
                  layout="fill"
                  className="object-cover"
                />
              </AnchorLink>
            </motion.div>
          </motion.div>
          <motion.div className="w-full h-32 relative">
            <motion.div className="w-full h-full" {...imageAnimate}>
              <AnchorLink
                route="https://www.fountains-direct.co.uk/"
                pass
                target
              >
                <Image
                  src="/fountains-direct.png"
                  alt="FOUNTAINS DIRECT"
                  layout="fill"
                  className="object-cover"
                />
              </AnchorLink>
            </motion.div>
          </motion.div>
          <motion.div className="w-full h-32 relative">
            <motion.div className="w-full h-full" {...imageAnimate}>
              <AnchorLink route="https://www.astralpool.com/" pass target>
                <Image
                  src="/astral logo.png"
                  alt="Astral Poo"
                  layout="fill"
                  className="object-contain"
                />
              </AnchorLink>
            </motion.div>
          </motion.div>
          <motion.div className="w-full h-32 relative">
            <motion.div className="w-full h-full" {...imageAnimate}>
              <AnchorLink route="https://www.ttirrigation.co.uk/" pass target>
                <Image
                  src="/Topturf_logo_RGB.jpg"
                  alt="Topturf"
                  layout="fill"
                  className="object-contain"
                />
              </AnchorLink>
            </motion.div>
          </motion.div>
          <motion.div className="w-full h-32 relative">
            <motion.div className="w-full h-full" {...imageAnimate}>
              <AnchorLink route="https://www.dabpumps.com/en" pass target>
                <Image
                  src="/DAB.png"
                  alt="DAB"
                  layout="fill"
                  className="object-contain"
                />
              </AnchorLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      <StoreSection />
      <section>
        <SectionHead>Come visit us</SectionHead>
        <motion.div>
          <motion.div className="grid md:grid-cols-2 gap-5">
            <motion.div className="w-full flex flex-col justify-center h-full">
              <motion.p {...textAnimate}>
                AQUATEC was established in 1976 to cater for the Swimming Pool
                Industry in Ghana. We have since branched out into other areas
                of the Water Industry such as Industrial and Residential Water
                Supply, with its related Equipment, including Pump Sets and
                Irrigation Equipment.
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
          <AdvantageCard icon="price">
            We are never knowingly undersold. We will match any Price.
          </AdvantageCard>
          <AdvantageCard icon="product">
            We are always fully stocked with our Products and Spare Parts.
          </AdvantageCard>
          <AdvantageCard icon="service">
            We install our equipment upon request.
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
