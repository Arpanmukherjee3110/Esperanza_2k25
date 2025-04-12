import banner from "@/assets/images/image8.png";
import banner2 from "@/assets/images/ESPERANZA.png";
import star3 from "@/assets/images/Star 3.png";
import group12 from "@/assets/images/Group12.png";
//import { section } from "framer-motion/client";
import Image from "next/image";

const PhotoContainer = () => {
  return (
    <div className="relative flex items-center justify-center pt-[8%]">
    <div className="h-[20%] w-[25%] md:h-[40%] md:w-[40%] border-[1px] border-white relative ml-5 mb-5 right-[11%] ">
      <div className="absolute top-[-50%] right-[2%] w-[110%]">
      <Image src={star3} alt="" />
      </div>
        
      <span className="relative top-[30px] right-[-25px] h-full w-full ">
      
        <Image src={banner} alt="" />
      </span>
      </div>
      <div className="relative h-full w-full md:h-[30%] md:w-[30%] ml-5 mb-5 top-[4%] right-[-9%]">
        <div className="relative right-[8%] pb-[18%] w-[55%] md:w-[60%]">
          <Image src={banner2} alt="" />
        </div>
        <span className="relative h-full w-full md:h-[30%] md:w-[30%] ml-5 mb-5 top-[4%] underdog">
          We are a dynamic group of tech enthusiasts, innovators, and problem-solvers passionate about shaping the future.we thrive on creativity and collaboration. 
          At Esperanza, we aim to push boundaries, showcase groundbreaking ideas, and inspire innovation. Join us on this exciting journey as we turn bold ideas into reality!
          
          <Image src={group12} alt="" className="pt-15 w-[62%] hover:cursor-pointer"/>
          
        </span>
        
      </div>
      
    </div>
  );
};

export default PhotoContainer;
