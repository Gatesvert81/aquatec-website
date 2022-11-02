import React, { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimationContext } from "./Context";

function StoreCard({ children, image }) {
  const { textAnimate, imageAnimate } = useContext(AnimationContext);
  return (
    <div className="w-fit h-fit flex flex-col justify-center items-center ">
      <motion.div
        className="w-60 h-60 bg-blue-300 rounded-full cursor-pointer overflow-hidden"
        {...textAnimate}
      >
        <motion.div className="w-full h-full  relative overflow-hidden">
          <motion.div className="w-full h-full" {...imageAnimate}>
            <Image
              src={`/product-pics/${image}`}
              alt="Dream pool"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* <motion.div 
                className='w-full h-full absolute top-0 left-0 z-10 flex flex-col justify-end items-center bg-dark-blue/[0.12] p-8  text-light-white hover:-translate-x-8 hover:translate-y-8 transition duration-500 ease-in-out rounded-full overflow-hidden' 
                >
                <motion.h5 {...textAnimate} className="text-center" >
                    {children}
                </motion.h5>
            </motion.div> */}
      </motion.div>
      <motion.div className="w-full h-fit justify-center items-cente text-center p-2">
        <motion.h5 {...textAnimate}>{children}</motion.h5>
      </motion.div>
    </div>
  );
}

export default StoreCard;
