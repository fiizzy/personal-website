import Image from "next/image";
import profilePicture from "../../public/profile-picture.png";

import logoBeta from "../../public/logo.svg";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <>
      <motion.div
        initial={{ y: +100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
      >
        <div className="md:flex items-center mt-40 md:space-x-10">
          <Image src={profilePicture} width={200} height={200} />

          <div>
            <div className="text-12 font-bold gradient-text">
              Hi, I am Fisayo
            </div>
            <div className="text-6 md:text-8 font-light">
              I am Software Engineer with a background in design, and I just
              can't seem to get over building stuff.
            </div>

            <div className="flex space-x-10 ">
              <a
                target="_blank"
                href="https://github.com/fiizzy"
                className="flex items-center space-x-2 opacity-70 hover:opacity-50"
              >
                <Image src={github} height={40} />
                <div>GitHub</div>
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/fisayo-obilaja"
                className="flex items-center space-x-2 opacity-70 hover:opacity-50"
              >
                <Image src={linkedin} height={40} />
                <div>LinkedIn</div>
              </a>
              <Link
                download
                href="/resume.pdf"
                locale={false}
                rel="noopener noreferrer"
                target="_blank"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 opacity-70 hover:opacity-50"
                >
                  <div className="underline"> Resume</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
