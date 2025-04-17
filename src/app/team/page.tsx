import RadialBgRed from "@/assets/background/RadialBgRed.png";
import TeamBg from "@/assets/images/Group 163057[1].png";
import meetOurDevelopers from "@/assets/images/meetOurDevelopers.png";
import Hexagon from "@/assets/images/Hexagon.png";

import Container from "@/components/Shared/Container";

import { TeamMemebrsCard } from "@/components/Teams/TeamMembersCard";
import { teamMembers } from "@/utils/static/crew";
import { Katibeh } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const sedgwick = Katibeh({
  subsets: ["latin"],
  weight: "400",
});

const Team = () => {
  return (
    <div className="mt-[125px] min-h-[90vh] relative overflow-hidden">
      <Image
        src={RadialBgRed}
        alt="background"
        className="opacity-20 sm:opacity-40 md:opacity-55 lg:opacity-65 absolute left-1/2 transform -translate-x-1/2 z-0"
      />
      <Image src={Hexagon} alt="hexagon decoration" className="absolute z-0" />

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
      <Container>
        <div className="flex justify-center relative z-50">
          <Link href="/developers" passHref legacyBehavior className="">
            <a target="_blank" className="inline-block w-[90%] md:w-auto pb-15 m-auto animate-pulse duration-200 hover:animate-none">
              <Image
                src={meetOurDevelopers}
                alt=""
                width={270}
                className="pt-[20] w-full m-auto hover:scale-108 transition-transform duration-300 cursor-pointer"
              />
            </a>
          </Link>
        </div>
      </Container>

      <div className="flex justify-between items-center">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Management Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("management"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>

      {/* Cards Section */}
      <div className="flex justify-between items-center pt-10">
        {/* Technical */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Technical Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("technical"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  {<TeamMemebrsCard member={m} />}
                </div>
              );
            })}
        </div>
      </Container>
      <div className="flex justify-between items-center pt-10">
        {/* Cultural */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Cultural Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("cultural"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  {<TeamMemebrsCard member={m} />}
                </div>
              );
            })}
        </div>
      </Container>

      

      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          PR Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("pr"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>

      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Content Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("content"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>

      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Sponsor Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("sponsor"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  {<TeamMemebrsCard member={m} />}
                </div>
              );
            })}
        </div>
      </Container>
      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Finance Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("finance"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>

      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Hospitality Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("hospitality"))
            .map((m, j) => {
              return (
                <div className="" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default Team;
