import banner from "@/assets/images/banner.png";
import Image from "next/image";

const PhotoContainer = () => {
  return (
    <div className="h-[350px] w-[250px] md:h-[500px] md:w-[350px] border-[1px] border-white relative ml-5 mb-5">
      <div className="absolute top-[20px] right-[20px] h-full w-full">
        <Image src={banner} alt="" />
      </div>
    </div>
  );
};

export default PhotoContainer;
