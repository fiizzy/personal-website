import { BoxPadding } from "../component/BoxPadding";
import { Navbar } from "../component/navbar/Navbar";
import { Intro } from "../component/intro/Intro";
import { ProfessionalExperience } from "../component/professional_experience/ProfessionalExperience";
import { Bordercard } from "../component/border_card/BoderCard";
import { Technologies } from "../component/technologies_card/Technologies";
import { LangAndFrameWork } from "../component/technologies_card/LangAndFrameWorks";

const Home: any = () => {
  return (
    <>
      <BoxPadding>
        <Navbar />
        <Intro />
        <ProfessionalExperience />
        <Technologies title="Lang and Frame" group={LangAndFrameWork.group} />
      </BoxPadding>
    </>
  );
};

export default Home;
