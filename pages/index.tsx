import { BoxPadding } from "../component/BoxPadding";
import { Navbar } from "../component/navbar/Navbar";
import { Intro } from "../component/intro/Intro";
import { ProfessionalExperience } from "../component/professional_experience/ProfessionalExperience";
import { Bordercard } from "../component/border_card/BoderCard";
import { Technologies } from "../component/technologies_card/Technologies";
import { LangAndFrameWork } from "../component/technologies_card/LangAndFrameWorks";
import { Tools } from "../component/technologies_card/Tools";
import { Projects } from "../component/projects/Projects";
import { Office } from "../component/office/Office";
import { Books } from "../component/books/Books";

const Home: any = () => {
  return (
    <>
      <Navbar />
      <BoxPadding>
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
        <div className="my-20">
          <p className="mb-10 tracking-widest text-8 opacity-70 font-light uppercase">
            Projects
          </p>
          <Projects />
        </div>
        <Office />
        <Books />
      </BoxPadding>
      <Navbar />
    </>
  );
};

export default Home;
