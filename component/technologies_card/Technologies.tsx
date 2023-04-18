import { Bordercard } from "../border_card/BoderCard";
import github from "../../public/github.svg";
import Image from "next/image";

export const Technologies = ({ title, group }: any) => {
  return (
    <Bordercard>
      <div>
        <div>{title}</div>
        {group.map((e: any, i: any) => (
          <div key={i}>
            <div>{e.type}</div>
            <div className="flex">
              {e.data.map((e: any, i: any) => (
                <div key={i}>
                  <div className="grey-200 bg-grey-100 p-2 rounded-[10px] border border-grey-200">
                    <div className="flex items-center space-x-2">
                      <Image src={github} height={40} />
                      <div>{e.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Bordercard>
  );
};
