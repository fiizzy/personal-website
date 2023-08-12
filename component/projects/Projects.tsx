import Image from "next/image";
import { Bordercard } from "../border_card/BoderCard";
import { Button } from "../button/Button";
import { projectData } from "./projectsData";
import { motion } from "framer-motion";

//Images
import appstore from "../../public/appstore.png";
import playstore from "../../public/playstore.png";

export const Projects = () => {
  return (
    <>
      {projectData.map((e: any, i: number) => (
        <motion.div
          initial={{ y: +100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
        >
          <div
            className={`my-8 grey-200 bg-grey-100 p-10 rounded-[10px] border border-grey-200  ${
              e.isFlagship
                ? "bg-gradient-to-r from-gradientPurple-1 to-gradientPurple-2"
                : "bg-gradient-to-r from-darkGradient-1 to-darkGradient-2"
            } `}
          >
            <div
              className={`${
                e.isFlagship ? "block" : "flex md:space-x-20"
              }  flex-wrap md:flex-nowrap items-center`}
            >
              <div>
                <div
                  className={`${
                    e.isFlagship ? "" : "w-[200px]"
                  } md:space-x-20 flex-wrap md:flex-nowrap items-center`}
                >
                  <img
                    src={e.image}
                    alt={e.name}
                    // layout="fill"
                    // objectFit="contain"
                  />
                </div>
              </div>
              <div>
                <div className="text-8 font-bold mt-4 md:mt-0">{e.name}</div>
                <div className="text-5 my-4">{e.description}</div>
                <div className="md:flex mb-4 md:mb-0 md:space-x-4 flex-wrap text-center  max-w-[200px] md:max-w-full">
                  {e.github ? <Button link={e.github} title="Github" /> : <></>}
                  {e.ios ? (
                    <a
                      className="w-48 hover:opacity-50 "
                      href={e.ios}
                      target="_blank"
                    >
                      <Image src={appstore} />
                    </a>
                  ) : (
                    <></>
                  )}
                  {e.android ? (
                    <a
                      className="w-48 hover:opacity-50 "
                      href={e.android}
                      target="_blank"
                    >
                      <Image src={playstore} />
                    </a>
                  ) : (
                    <></>
                  )}
                  {e.readMore ? (
                    <Button link={e.readMore} title="Read More" />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            {e.isFlagship ? (
              <div>
                <div className="mt-8 text-7 font-bold">My Flagship Project</div>
                <div className="mt-2 text-4 ">
                  If you’re looking to access my latest skill-sets and
                  experience, please check out this project as it contains all
                  of my most recent experience that takes in account OOP
                  principles, Testing, Clean Architecture, Reactive Programming
                  and Design patterns.
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </motion.div>
      ))}
    </>
  );
};
