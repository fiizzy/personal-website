import { Section } from "../section/Section";

export const ProfessionalExperience = () => {
  return (
    <Section id="summary" title="Professional Summary">
      <p className="max-w-[68ch] text-5 leading-[1.7] text-fg/80">
        I am a software engineer with years of experience building quality,
        testable and maintainable software products. Within my professional
        routine, I immerse myself extensively in React Native, and Flutter,
        specializing in the intricacies of mobile application development. My
        technical repertoire extends to include React, Node.js, and AWS,
        showcasing my adeptness in handling intricate cloud dependent projects.
        My technological goal is to become a CTpO (with a small p!) -{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@rico.surridge/cpo-cto-or-cpto-3ae202c021cf"
          className="link italic"
        >
          what’s that?
        </a>
      </p>
    </Section>
  );
};
