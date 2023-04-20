import { professionExperience } from "../constants";

export const ProfessionalExperience = () => {
  return (
    <>
      <h3 className="mt-12 tracking-widest text-5 md:text-8 opacity-70 font-light">
        PROFESSIONAL SUMMARY
      </h3>
      <p className="line-height-2 text-5">
        I am a software engineer with 3 years of experience building quality,
        testable and maintainable software products. I have a Bachelor's degree
        in computer engineering with an additional background in design and
        product health in general. In my day to day job, I work with Flutter
        mostly. I occassionally work with React, Node and TypeScript. My
        technological goal is to become a CTpO (with a small p!) -
        <a
          target="_blank"
          href="https://medium.com/@rico.surridge/cpo-cto-or-cpto-3ae202c021cf"
        >
          <u className="text-blue-200">
            <i>what’s that?</i>
          </u>
        </a>
      </p>
    </>
  );
};
