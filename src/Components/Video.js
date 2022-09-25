import React from "react";
import { motion } from "framer-motion";

function Video() {
  return (
    <motion.section className="w-full h-fit relative">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="w-full h-full relative"
      >
        <source
          src="video/aquatec video.mp4"
          type="video/mp4"
          className="w-full h-full"
        />
        <div>
          <p>Play</p>
        </div>
      </video>
      {/* <motion.div className='w-full h-full'
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            default: {
              duration: 0.5
            }
          }}>
          <Image src="/project-pics/stuart.jpg" alt='Dream pool' layout='fill' className='object-cover' />
        </motion.div> */}
    </motion.section>
  );
}

export default Video;
