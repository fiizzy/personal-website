import Image from "next/image";
import { Padding } from "../Padding";
/* 
Image imports
*/
import logoBeta from "../../public/logo-beta.svg";
import Link from "next/link";

export const Navbar = (props: any) => {
  return (
    <Padding>
      <div
        className={`${
          props.display ?? "flex"
        }  justify-between items-center p-6 ${props.color ?? "bg-grey-900"}`}
      >
        <Image src={logoBeta} />
        <div className="flex space-x-4">
          <a href="#pricing">
            <div>Pricing</div>
          </a>
          <a href="#approach">
            <div>Approach</div>
          </a>
          <Link
            download
            href="/road-map.pdf"
            locale={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            <a target="_blank" rel="noreferrer">
              <div>{props.link}</div>
            </a>
          </Link>
        </div>
      </div>
    </Padding>
  );
};
