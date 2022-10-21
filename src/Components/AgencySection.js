import React, { useContext } from "react";
import  { motion } from 'framer-motion'
import SectionHead from "./SectionHead";
import AnchorLink from "./AnchorLink";
import Image from "next/image";
import { AnimationContext } from "./Context";

function AgencySection() {
const { imageAnimate } = useContext(AnimationContext);
  return (
    <motion.section>
      <SectionHead>our Agencies</SectionHead>
      <motion.div className="w-full grid grid-cols-1 md:grid-cols-5 gap-5">
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
            <AnchorLink route="https://www.fluidra.com/" pass target>
              <Image
                src="/FLUIDRA.png"
                alt="FLUIDRA"
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
        <motion.div className="w-full h-32 relative">
          <motion.div className="w-full h-full" {...imageAnimate}>
            <AnchorLink route="https://www.fountains-direct.co.uk/" pass target>
              <Image
                src="/fountains-direct.png"
                alt="FOUNTAINS DIRECT"
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
      </motion.div>
    </motion.section>
  );
}

export default AgencySection;
