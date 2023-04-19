import Image from "next/image";
import officeOne from "../../public/office-1.png";
import officeThree from "../../public/office-3.png";
import officeTwo from "../../public/office-2.png";
import { motion } from "framer-motion";

export const Office = () => {
  return (
    <>
      <motion.div
        initial={{ y: +100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
      >
        <p className="mb-10 tracking-widest text-8 opacity-70 font-light uppercase">
          office
        </p>
        <div className="flex items-center justify-between ">
          <div className=" flex-1 ">
            <Image src={officeOne} />
          </div>

          <div className="flex-1 ">
            <Image src={officeTwo} />
          </div>
        </div>
      </motion.div>
    </>
  );
};
