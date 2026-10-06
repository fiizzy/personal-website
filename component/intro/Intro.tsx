import Image from "next/image";
import profilePicture from "../../public/profile-picture.png";
import { sectionColumns } from "../section/Section";
import { socialLinks } from "../socialLinks";

export const Intro = () => {
  return (
    <section
      className={`grid gap-8 pt-16 md:grid-cols-[180px_minmax(0,1fr)] md:items-center md:gap-10 md:pt-28 ${sectionColumns}`}
    >
      <div className="rise w-[160px] overflow-hidden rounded-2xl ring-1 ring-fg/10 shadow-[0_24px_60px_-24px_rgba(124,62,255,0.55)] md:w-full">
        <Image
          src={profilePicture}
          alt="Portrait of Fisayo Obilaja"
          layout="responsive"
          width={220}
          height={220}
          placeholder="blur"
          priority
        />
      </div>

      <div>
        <h1 className="rise [animation-delay:80ms] text-11 md:text-14 font-bold leading-[1.1] tracking-[-0.02em] gradient-text">
          Hi, I am Fisayo
        </h1>
        <p className="rise [animation-delay:160ms] mt-4 text-6 md:text-8 font-light leading-snug text-fg/90">
          A full-stack software engineer in Manchester, UK. I build mobile, web
          and backend products end to end, increasingly with AI at their core.
          I have a{" "}
          <a
            href="https://behance.net/fisayoobilaja"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            background in design
          </a>
          , and I just can't seem to get over building stuff.
        </p>

        <ul className="rise [animation-delay:240ms] mt-8 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.href}
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-fg/15 bg-fg/[0.03] pl-3 pr-4 text-fg/85 transition-colors hover:border-fg/30 hover:bg-fg/[0.08] hover:text-fg"
              >
                <span className="mono-icon flex">
                  <Image src={link.icon} alt="" height={22} width={22} />
                </span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
