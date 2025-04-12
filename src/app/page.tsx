import MarqueeText from "@/components/Home/EspStrip";
import Container from "@/components/Shared/Container";
import Header from "@/components/Shared/Header";
//import Image from "next/image";
import EspAnimation from "@/components/Shared/EspAnim";
import PhotoContainer from "@/components/Home/PhotoContainer";
import HeroSection from "@/components/Home/HeroSection";
import Band from "@/components/Home/Band";
import { auth } from "@/auth";


const Home = async() => {

  const session = await auth()
  if (session) {
    console.log("User is logged in:", session);
  } else {
    console.log("User is not logged in");
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      <div className="h-full">
      <HeroSection />
      <div
        className={`pt-[250px] flex items-center box-border h-screen px-4 sm:px-6 md:px-10 lg:px-14`}
      >
        <EspAnimation />
      </div></div>
      
      <div className="bg-home-content-main">
      <MarqueeText />
        <Container>{null}</Container>
      </div>
        <div>
          <PhotoContainer />
        </div>
        <div>
          <Band/>
        </div>
        {/* <div>
          <Tech/>
        </div>
        <div>
          <Cultural/>
        </div> */}
    </div>
    
  );
};

export default Home;
