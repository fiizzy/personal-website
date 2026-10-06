import { BoxPadding } from "../component/BoxPadding";
import { Navbar } from "../component/navbar/Navbar";
import { Intro } from "../component/intro/Intro";
import { ProfessionalExperience } from "../component/professional_experience/ProfessionalExperience";
import { Technologies } from "../component/technologies_card/Technologies";
import { Projects } from "../component/projects/Projects";
import { Office } from "../component/office/Office";
import { Books } from "../component/books/Books";
import { NextHead } from "../component/Head/NextHead";

const Home: any = () => {
  return (
    <div id="top">
      <NextHead pageTitle="Fisayo Obilaja" />
      <Navbar />
      <main>
        <BoxPadding>
          <Intro />
          <ProfessionalExperience />
          <Technologies />
          <Projects />
          <Office />
          <Books />
        </BoxPadding>
      </main>
      <div className="mt-24 pb-8 md:mt-32">
        <Navbar as="footer" />
      </div>
    </div>
  );
};

export default Home;
