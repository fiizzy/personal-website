import { Section } from "../section/Section";

const books = [
  {
    title: "Head First Design Pattern",
    href: "https://www.oreilly.com/library/view/head-first-design/0596007124/",
  },
  {
    title: "Clean Code",
    href: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/",
  },
  {
    title: "The Defining Decade",
    href: "https://www.amazon.com/Defining-Decade-Your-Twenties-Matter/dp/0446561754",
  },
  { title: "Atomic Habits", href: "https://jamesclear.com/atomic-habits" },
  {
    title: "The 6 Pillars of Self Esteem",
    href: "https://experiencelife.lifetime.life/article/the-six-pillars-of-self-esteem/",
  },
  { title: "Breath", href: "https://www.mrjamesnestor.com/breath-book" },
];

export const Books = () => {
  return (
    <Section id="books" title="fav. books">
      <ul className="grid list-disc gap-x-12 gap-y-4 pl-6 marker:text-fg/30 sm:grid-cols-2">
        {books.map((book) => (
          <li key={book.title} className="text-6 md:text-7">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={book.href}
              className="link"
            >
              {book.title}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
