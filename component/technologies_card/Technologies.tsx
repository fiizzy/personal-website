import { Bordercard } from "../border_card/BoderCard";
import github from "../../public/github.svg";
import Image from "next/image";

export const Technologies = ({ title, group }: any) => {
  return (
    <Bordercard>
      <div>
        <div className="text-8 opacity-60 font-bold underline">{title}</div>
        {group.map((e: any, i: any) => (
          <div key={i}>
            <div className="mt-10 mb-2 uppercase tracking-widest opacity-70">
              {e.type}
            </div>
            <div className="flex space-x-2">
              {e.data.map((e: any, i: any) => (
                <div key={i}>
                  <Tags e={e} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Bordercard>
  );
};

const Tags = ({ e }: any) => {
  return (
    <a target="_blank" href={e.url}>
      <div className="grey-200 bg-grey-100 p-2 rounded-[10px] border border-grey-200 cursor-pointer hover:opacity-50">
        <div className="flex items-center space-x-2">
          <Image src={e.image} height={20} width={20} />
          <div>{e.name}</div>
        </div>
      </div>
    </a>
  );
};
