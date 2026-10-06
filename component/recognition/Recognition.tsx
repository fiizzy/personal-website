import { Section } from "../section/Section";

const items = [
  {
    title: "BSc Computer Engineering",
    detail: "Lagos State University, 2014 – 2019. Graduated with a 4.17 CGPA.",
  },
  {
    title: "UK Global Talent",
    detail: "Endorsed by the UK government as a Global Talent.",
  },
  {
    title: "Lagos State Government award",
    detail:
      "Honoured for my leadership as youth ambassador for Badagry, one of the five divisions of Lagos State.",
  },
  {
    title: "Synthentix design challenge",
    detail: "Top 10 finalist in a global design challenge.",
  },
];

export const Recognition = () => {
  return (
    <Section id="recognition" title="Education & Recognition">
      <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.title} className="border-t border-fg/10 pt-5">
            <h3 className="text-5 md:text-6 font-bold">{item.title}</h3>
            <p className="mt-2 text-4 leading-relaxed text-fg/75">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
