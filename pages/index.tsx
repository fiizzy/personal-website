import { BoxPadding } from "../component/BoxPadding";
import { Navbar } from "../component/navbar/Navbar";
import { Intro } from "../component/intro/Intro";

const Home: any = () => {
  return (
    <>
      <BoxPadding>
        <Navbar />
        <Intro />
      </BoxPadding>
    </>
  );
};

export default Home;
