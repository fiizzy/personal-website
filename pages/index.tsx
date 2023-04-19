import { BoxPadding } from "../component/BoxPadding";
import { Navbar } from "../component/navbar/Navbar";
import { Intro } from "../component/intro/Intro";
import { ProfessionalExperience } from "../component/professional_experience/ProfessionalExperience";
import { Bordercard } from "../component/border_card/BoderCard";
import { Technologies } from "../component/technologies_card/Technologies";
import { LangAndFrameWork } from "../component/technologies_card/LangAndFrameWorks";
import { Tools } from "../component/technologies_card/Tools";
import { Projects } from "../component/projects/Projects";

const Home: any = () => {
  return (
    <>
      <BoxPadding>
        <Navbar />
        <Intro />
        <ProfessionalExperience />
        <div className="mt-20">
          <Technologies
            title="Languages and Frameworks"
            group={LangAndFrameWork.group}
          />
        </div>
        <div className="mt-10">
          <Technologies title="Tools" group={Tools.group} />
        </div>
        <div>
          <p>Projects</p>
          <Projects />
        </div>
      </BoxPadding>
    </>
  );
};

export default Home;
