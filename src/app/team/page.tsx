import RadialBgRed from "@/assets/background/RadialBgRed.png";
import TeamBg from "@/assets/images/Group 163057[1].png";

import Card,{CardContainer, cards,} from "@/components/sponsors/card";
import Hexagon from "@/assets/images/Hexagon.png";


import Container from "@/components/Shared/Container";


import Image from "next/image"
const Team = () => {
  return (
    <div className="mt-[125px] min-h-[90vh] relative overflow-hidden">
    <Image
      src={RadialBgRed}
      alt="background"
      className="opacity-20 sm:opacity-40 md:opacity-55 lg:opacity-65 absolute left-1/2 transform -translate-x-1/2 z-0"
    />
    <Image src={Hexagon} alt="hexagon decoration" className="absolute z-0" />

    {/* About Us Section */}
    <div className="flex flex-col items-center py-10 relative z-20">
      <Container>
        <div className="flex justify-center relative z-30 w-full max-w-[700px] mx-auto">
          <Image
            src={TeamBg}
            alt="about us"
            className="object-contain"
            priority
          />
        </div>
      </Container>
    </div>
    {/* Cards Section */}
    
      <Container>
        <CardContainer>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </CardContainer>
      </Container>      

    </div>
  )
}

export default Team