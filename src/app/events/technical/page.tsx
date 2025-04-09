import Container from "@/components/Shared/Container";
import Image from "next/image";

import HexagonWhite from "@/assets/background/HexagonWhite.png";
import RadialBgRed from "@/assets/background/RadialBgRed.png";
import Hexagon from "@/assets/images/Hexagon.png";
import TechnicalHeading from "@/assets/images/TechnicalHeading.png";
import { CardDiv } from "@/components/Shared/Card";
import { events } from "@/utils/dummy-data/events";
import { CarouselCompoment } from "@/components/Shared/Carousel";
import { Katibeh } from "next/font/google";

const katibeh = Katibeh({
  subsets: ["arabic"],
  weight: ["400"],
});

const Technical = () => {
  return (
    <div className="min-h-[90vh] mt-[125px] relative">
      <Image
        src={RadialBgRed}
        alt=""
        className="opacity-20 sm:opacity-40 md:opacity-55 lg:opacity-65 absolute left-[50%] translate-x-[-50%]  z-[-1]"
      />
      <Image src={Hexagon} alt="" className="absolute " />
      <div className="flex justify-center relative">
        <Container>
          <Image
            src={TechnicalHeading}
            alt=""
            className="w-[400px] sm:w-[500px] md:w-[800px] lg:w-[1000px] mt-10"
          />
        </Container>
      </div>
      <Container>
        <CarouselCompoment/>
      </Container>
      <Container>
        <div className="min-h-screen relative">
          <Image
            src={HexagonWhite}
            alt=""
            className="absolute left-[50%] translate-x-[-50%] opacity-50"
          />
          <Image
            src={Hexagon}
            alt=""
            className="absolute top-[20%] left-[25%] translate-x-[-50%] opacity-80"
          />
          <Image
            src={HexagonWhite}
            alt=""
            className="absolute top-[45%] left-[40%] translate-x-[-50%] opacity-70"
          />
          <div className="bg-gray-500/50 h-full w-[1px] absolute top-0 left-[-8px] md:left-[50%] md:translate-x-[-50%] animate-pulse" />
          <div className=" flex flex-col gap-1">
            {events.map((event, i) => {
              console.log(i);

              if (i % 2 === 0) {
                return (
                  <CardDiv
                    reverseAlign
                    eventName={event.eventName}
                    eventDescription={event.eventDescription}
                    poster={event.poster}
                    redirect={event.redirect}
                    key={i}
                    DateContent={event.date}
                  />
                );
              } else {
                return (
                  <CardDiv
                    eventName={event.eventName}
                    eventDescription={event.eventDescription}
                    poster={event.poster}
                    redirect={event.redirect}
                    key={i}
                    DateContent={event.date}
                  />
                );
              }
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Technical;
