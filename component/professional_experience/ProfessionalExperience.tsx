import Link from "next/link";
import { Section } from "../section/Section";

export const ProfessionalExperience = () => {
  return (
    <Section id="summary" title="Professional Summary">
      <div className="space-y-5 text-5 md:text-6 leading-[1.65] text-fg/80">
        <p>
          Since 2018 I've grown from product designer to full-stack engineer,
          shipping React Native and Flutter apps, React and Next.js on the web,
          and the Supabase, PostgreSQL and AWS backends behind them. Today I
          build AI-powered hearing health products at Neurotone AI. My long-term
          goal is to become a CTpO (with a small p!) -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@rico.surridge/cpo-cto-or-cpto-3ae202c021cf"
            className="link italic"
          >
            what’s that?
          </a>
        </p>
        <p>
          To see where I've worked and what I shipped,{" "}
          <Link href="/experience">
            <a className="link">click here</a>
          </Link>
          .
        </p>
      </div>
    </Section>
  );
};
