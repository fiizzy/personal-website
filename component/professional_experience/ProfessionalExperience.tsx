import { professionExperience } from "../constants";

export const ProfessionalExperience = () => {
  return (
    <>
      <h3 className="mt-12 tracking-widest text-5 md:text-8 opacity-70 font-light">
        PROFESSIONAL SUMMARY
      </h3>
      <p className="line-height-2 text-5">{professionExperience}</p>
    </>
  );
};
