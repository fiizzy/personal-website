import Image from "next/image";
import { Padding } from "../Padding";
import { socialLinks } from "../socialLinks";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../../public/logo.svg";

interface INavbar {
  as?: "header" | "footer";
}

export const Navbar = ({ as: Tag = "header" }: INavbar) => {
  return (
    <Tag>
      <Padding>
        <div
          className={`flex items-center justify-between py-6 ${
            Tag === "footer" ? "border-t border-fg/10" : "border-b border-fg/10"
          }`}
        >
          <a
            href="#top"
            aria-label="Fisayo Obilaja, back to top"
            className="flex rounded-md transition-opacity hover:opacity-80"
          >
            <span className="mono-icon flex">
              <Image src={logo} alt="" height={40} width={40} />
            </span>
          </a>
          <div className="flex items-center gap-1 md:gap-3">
            <nav aria-label={Tag === "footer" ? "Footer" : "Main"}>
              <ul className="flex items-center gap-2 md:gap-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link.href}
                      aria-label={link.name}
                      className="group flex items-center gap-2 rounded-lg px-2 py-2 text-fg/75 transition-colors hover:text-fg"
                    >
                      <span className="mono-icon flex opacity-75 transition-opacity group-hover:opacity-100">
                        <Image src={link.icon} alt="" height={28} width={28} />
                      </span>
                      <span className="hidden md:inline">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {Tag === "header" ? <ThemeToggle /> : null}
          </div>
        </div>
      </Padding>
    </Tag>
  );
};
