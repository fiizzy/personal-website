import Image from "next/image";
import profilePicture from "../../public/profile-picture.png";

import logoBeta from "../../public/logo.svg";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import Link from "next/link";

export const Intro = () => {
  return (
    <>
      <div className="flex items-center mt-40 space-x-10">
        <Image src={profilePicture} width={200} height={200} />

        <div>
          <div className="text-12 font-bold gradient-text">Hi, I am Fisayo</div>
          <div className="text-8 font-light">
            I am software Engineer with a diverse background in design.
          </div>

          <div className="flex space-x-10 ">
            <a
              target="_blank"
              href="https://github.com/fiizzy"
              className="flex items-center space-x-2 opacity-50 hover:opacity-100"
            >
              <Image src={github} height={40} />
              <div>GitHub</div>
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/fisayo-obilaja"
              className="flex items-center space-x-2 opacity-50 hover:opacity-100"
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
                className="flex items-center space-x-2 opacity-50 hover:opacity-100"
              >
                <div>Download Resume</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
