import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const SideImage = () => {
  const [random, setRandom] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRandom(Math.random());
    }, 20000);

    return () => clearInterval(interval);
  }, [random]);
  return (
    <div className="w-full lg:w-1/2 relative m-auto mt-8 ">
      <motion.div
        initial={{
          borderRadius: "50% 40% 50% 60% ",

          y: 0,
        }}
        whileInView={{
          borderRadius: `
            
          ${50 - 20 * random}%
          
          ${40 - 20 * random}%
          
          ${50 - 20 * random}%
          
          ${60 - 20 * random}%
            `,
          y: -20 * (0.5 + random),
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          type: "tween",
        }}
        className="m-auto overflow-hidden  bg-bgAccent/75 shadow-2xl hover:bg-main duration-300 w-80 h-80 p-2"
      >
        <div
          style={{
            borderRadius: "50% 40% 50% 60% ",
          }}
          className="overflow-hidden"
        >
          <Image
            src="/images/eslam.webp"
            alt="about"
            className=" m-auto  w-full h-full object-contain  "
            width={300}
            height={300}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SideImage;
