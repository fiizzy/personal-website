import { BoxPadding } from "../component/BoxPadding";
import { Navbar } from "../component/navbar/Navbar";
import { Intro } from "../component/intro/Intro";
import { ProfessionalExperience } from "../component/professional_experience/ProfessionalExperience";

const Home: any = () => {
  return (
    <>
      <BoxPadding>
        <Navbar />
        <Intro />
        <ProfessionalExperience />
      </BoxPadding>
    </>
  );
};

export default Home;
