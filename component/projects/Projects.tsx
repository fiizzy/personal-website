import { Bordercard } from "../border_card/BoderCard";
import { projectData } from "./projectsData";

export const Projects = () => {
  return (
    <>
      {projectData.map((e: any, i: number) => (
        <div className="grey-200 bg-grey-100 p-10 rounded-[10px] border border-grey-200 flex items-center">
          <div>Image</div>
          <div>
            <div>{e.name}</div>
            <div>{e.description}</div>
            <div className="flex">
              {e.github ? <div> Github Link</div> : <></>}
              {e.ios ? <div> Ios Link</div> : <></>}
              {e.android ? <div> Android Link</div> : <></>}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
