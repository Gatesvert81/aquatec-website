import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setInterval(() => setCurrent((prevIndex) => prevIndex++), 2500);
  }, []);

  const images = [
    "/project-pics/home-pool.webp",
    "/product-pics/dab-centrifugal.webp",
  ];

  return (
    <>
      {/* <AnimatePresence>
        {current === 0 && (
          <motion.div
            className="w-full h-full"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
          </motion.div>
        )}
      </AnimatePresence> */}
      {current % 2 === 0 ? (
        <Image
          src={images[0]}
          layout="fill"
          className="object-cover"
        />
      ) : (
        <Image
          src={images[1]}
          layout="fill"
          className="object-cover"
        />
      )}
      {/* <AnimatePresence>
        {current === 0 && (
          <motion.div
            className="w-full h-full"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <Image
              src="/product-pics/dab-centrifugal.webp"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
}

export default Carousel;
