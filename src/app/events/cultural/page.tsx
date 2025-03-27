import Image from "next/image";
import RadialBgRed from "@/assets/background/RadialBgRed.png";
import CulturalHeading from "@/assets/images/CulturalHeading.png";
import Container from "@/components/Shared/Container";

const Technical = () => {
  return (
    <div className="mt-[125px] min-h-[90vh] relative">
      <Image
        src={RadialBgRed}
        alt=""
        className="opacity-20 sm:opacity-40 md:opacity-55 lg:opacity-65 absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]"
      />
      <div className="flex justify-center relative">
        <Container>
          <Image src={CulturalHeading} alt="" className="w-[400px] sm:w-[500px] md:w-[800px] lg:w-[1000px]" />
        </Container>
      </div>
      <div>
        {/* Band at a glance */}
        
      </div>
    </div>
  );
};

export default Technical;
