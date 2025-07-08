import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const HomeBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-0 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="2xl:w-[1900px] p-2 bg-white mx-auto  text-center">
        <motion.div {...fadeInUp}>
          <Image
            src={"/banner.webp"}
            width={1900}
            height={800}
            alt="banner"
            className="w-full "
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeBanner;
