import Link from "next/link";
import { BoxPadding } from "../component/BoxPadding";
import { Navbar } from "../component/navbar/Navbar";
import { NextHead } from "../component/Head/NextHead";
import { ExperienceList } from "../component/experience/Experience";

const ExperiencePage: any = () => {
  return (
    <div id="top">
      <NextHead pageTitle="Experience · Fisayo Obilaja" />
      <Navbar />
      <main id="main">
        <BoxPadding>
          <div className="pt-12 md:pt-20">
            <div>
              <Link href="/">
                <a className="group inline-flex items-center gap-2 rounded-lg text-4 text-fg/70 transition-colors hover:text-fg">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
                  >
                    <path
                      d="M10 3 5 8l5 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Home
                </a>
              </Link>
            </div>
            <div className="mt-10 md:mt-14">
              <h1 className="text-11 md:text-14 font-bold leading-[1.1] tracking-[-0.02em]">
                Experience
              </h1>
              <p className="mt-4 text-6 md:text-7 font-light leading-snug text-fg/75">
                From designing hospital systems to building AI-powered health
                tech: the teams I've worked with and what I shipped.
              </p>
              <div className="mt-14 md:mt-20">
                <ExperienceList />
              </div>
            </div>
          </div>
        </BoxPadding>
      </main>
      <div className="mt-24 pb-8 md:mt-32">
        <Navbar as="footer" />
      </div>
    </div>
  );
};

export default ExperiencePage;
