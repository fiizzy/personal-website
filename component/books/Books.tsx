import Image from "next/image";
import officeOne from "../../public/office-1.png";
import officeThree from "../../public/office-3.png";
import officeTwo from "../../public/office-2.png";
import { motion } from "framer-motion";

export const Books = () => {
  return (
    <motion.div
      initial={{ y: +100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
    >
      <div className="mb-20 ">
        <p className="mt-12 mb-10 tracking-widest text-8 opacity-70 font-light uppercase">
          fav. books
        </p>
        <div className="px-6 md:px-20">
          <a
            className="underline "
            target="_blank"
            href="https://www.oreilly.com/library/view/head-first-design/0596007124/"
          >
            <ul className=" list-disc">
              <li className="text-7 text-blue-200">
                Head First Design Pattern
              </li>
            </ul>
          </a>
          <a
            className="underline "
            target="_blank"
            href="https://www.oreilly.com/library/view/clean-code-a/9780136083238/"
          >
            <ul className="list-disc">
              <li className="text-7 text-blue-200">Clean Code</li>
            </ul>
          </a>
          <a
            className="underline "
            target="_blank"
            href="https://www.amazon.com/Defining-Decade-Your-Twenties-Matter/dp/0446561754"
          >
            <ul className=" list-disc">
              <li className="text-7 text-blue-200">The Defining Decade</li>
            </ul>
          </a>
          <a
            className="underline "
            target="_blank"
            href="https://jamesclear.com/atomic-habits"
          >
            <ul className=" list-disc">
              <li className="text-7 text-blue-200">Atomic Habits</li>
            </ul>
          </a>
          <a
            className="underline "
            target="_blank"
            href="https://experiencelife.lifetime.life/article/the-six-pillars-of-self-esteem/"
          >
            <ul className=" list-disc">
              <li className="text-7 text-blue-200">
                The 6 Pillars of Self Esteem
              </li>
            </ul>
          </a>
          <a
            className="underline "
            target="_blank"
            href="https://www.mrjamesnestor.com/breath-book"
          >
            <ul className=" list-disc">
              <li className="text-7 text-blue-200">Breath</li>
            </ul>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
