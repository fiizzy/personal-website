import { professionExperience } from "../constants";

export const ProfessionalExperience = () => {
  return (
    <>
      <h3 className="mt-12 tracking-widest text-5 md:text-8 opacity-70 font-light">
        PROFESSIONAL SUMMARY
      </h3>
      <p className="line-height-2 text-5">
        I am a software engineer with years of experience building quality,
        testable and maintainable software products. Within my professional
        routine, I immerse myself extensively in React Native, and Flutter,
        specializing in the intricacies of mobile application development. My
        technical repertoire extends to include React, Node.js, and AWS,
        showcasing my adeptness in handling intricate cloud dependent projects.
        My technological goal is to become a CTpO (with a small p!) -
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
