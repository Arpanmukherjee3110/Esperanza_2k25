import Image from "next/image";
import RadialBgRed from "@/assets/background/RadialBgRed.png";
import Hexagon from "@/assets/images/Hexagon.png";
import Container from "@/components/Shared/Container";
import GalleryHeading from "@/assets/images/GALLERY.png";
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
            className="w-[400px] sm:w-[500px] md:w-[800px] lg:w-[1000px] absolute top-[200px] left-[50%] translate-x-[-50%]"
          />
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
