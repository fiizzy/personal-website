import Image from "next/image";
import profilePicture from "../../public/profile-picture.png";
import Link from "next/link";
import { socialLinks } from "../socialLinks";

export const Intro = () => {
  return (
    <section className="grid gap-8 pt-16 md:grid-cols-[180px_minmax(0,1fr)] md:items-center md:gap-10 md:pt-28 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
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
          and backend products end to end, increasingly with AI at their core. I
          have a{" "}
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
          <li className="w-full sm:w-auto">
            <Link href="/experience">
              <a className="group inline-flex h-11 w-full items-center justify-center gap-2 sm:w-auto rounded-xl bg-fg px-5 font-normal text-bg transition-[background-color,transform] duration-200 hover:bg-fg/85 active:scale-[0.98]">
                View experience
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Link>
          </li>
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
