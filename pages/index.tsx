import { BoxPadding } from "../component/BoxPadding";
import { Navbar } from "../component/navbar/Navbar";
import { Intro } from "../component/intro/Intro";
import { ProfessionalExperience } from "../component/professional_experience/ProfessionalExperience";
import { Technologies } from "../component/technologies_card/Technologies";
import { Projects } from "../component/projects/Projects";
import { Recognition } from "../component/recognition/Recognition";
import { Office } from "../component/office/Office";
import { Books } from "../component/books/Books";
import { NextHead } from "../component/Head/NextHead";
import { HeroBackground } from "../component/intro/HeroBackground";

const Home: any = () => {
  return (
    <div id="top" className="relative isolate">
      <NextHead pageTitle="Fisayo Obilaja" />
      <HeroBackground />
      <Navbar />
      <main id="main">
        <BoxPadding>
          <Intro />
          <ProfessionalExperience />
          <Projects />
          <Technologies />
          <Recognition />
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
