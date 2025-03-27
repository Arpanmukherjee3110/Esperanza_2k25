import espHeading from "@/assets/images/espHeading.png";
import EspStrip from "@/components/Home/EspStrip";
import Container from "@/components/Shared/Container";
import Header from "@/components/Shared/Header";
import Image from "next/image";



const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      <div
        className={`pt-[125px] flex items-center box-border bg-home-main h-screen px-4 sm:px-6 md:px-10 lg:px-14`}
      >
        <Image src={espHeading} alt="" />
      </div>
      <div className="bg-home-content-main">
        <EspStrip />
        <Container>{null}</Container>
      </div>
    </div>
  );
};

export default Home;
