import Image from "next/image";
import RadialBgRed from "@/assets/background/RadialBgRed.png";
import Hexagon from "@/assets/images/Hexagon.png";
import Container from "@/components/Shared/Container";
import GalleryHeading from "@/assets/images/GALLERY.png";
import { Katibeh } from "next/font/google";
import { cards, GalleryGrid } from "@/components/Gallery/LayoutGrid";

const katibeh = Katibeh({
  subsets: ["arabic"],
  weight: ["400"],
});

const Gallery = () => {
  return (
    <div className="mt-[125px] min-h-screen relative">
      <Image
        src={RadialBgRed}
        alt=""
        className="opacity-20 sm:opacity-40 md:opacity-55 lg:opacity-65 absolute left-[50%] translate-x-[-50%]  z-[-1]"
      />
      <Image src={Hexagon} alt="" className="absolute " />
      <div className="flex justify-center relative">
        <Container>
          <Image
            src={GalleryHeading}
            alt=""
            className="w-[400px] sm:w-[500px] md:w-[800px] lg:w-[1000px] mt-10"
          />
        </Container>
      </div>
      <div className="flex justify-center items-center mt-7">
        {/* Tech Gallery */}

        <h1 className={`${katibeh.className} px-1 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}>
          Tech Gallery
        </h1>
      </div>
      <div className="mt-6">
        <GalleryGrid cards={cards}/>
      </div>
      <div className="flex justify-center items-center mt-7">
        {/* Cultural Gallery */}

        <h1 className={`${katibeh.className} px-1 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}>
          Cultural Gallery
        </h1>
      </div>
      <div className="mt-6">
        <GalleryGrid cards={cards}/>
      </div>
    </div>
  );
};

export default Gallery;
