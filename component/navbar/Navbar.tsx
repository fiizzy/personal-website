import Image from "next/image";
import { Padding } from "../Padding";
/* 
Image imports
*/
import logoBeta from "../../public/logo.svg";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import Link from "next/link";

export const Navbar = (props: any) => {
  return (
    <Padding>
      <div
        className={`${
          props.display ?? "flex"
        }  justify-between items-center p-6 ${props.color ?? "bg-grey-900"}`}
      >
        <Image src={logoBeta} height={40} />
        <div className="flex space-x-10">
          <a
            target="_blank"
            href="https://github.com/fiizzy"
            className="flex items-center space-x-2"
          >
            <Image src={github} height={40} />
            <div>GitHub</div>
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/fisayo-obilaja"
            className="flex items-center space-x-2"
          >
            <Image src={linkedin} height={40} />
            <div>LinkedIn</div>
          </a>
          <Link
            download
            href="/resume.pdf"
            locale={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2"
            >
              <div className="underline"> Resume</div>
            </a>
          </Link>
        </div>
      </div>
    </Padding>
  );
};
