import banner from "@/assets/images/image8.png";
import banner2 from "@/assets/images/ESPERANZA.png";
import star3 from "@/assets/images/Star 3.png";
import group12 from "@/assets/images/Group12.png";
//import { section } from "framer-motion/client";
import Image from "next/image";
import { Sedgwick_Ave_Display } from "next/font/google";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})
const PhotoContainer = () => {
  return (
    <div className="flex flex-col relative md:flex-row items-center justify-center pt-[8%]">
    <div className="w-[80%] md:h-[40%] md:w-[40%] border-[1px] border-white relative ml-5 mb-5 right-[11%] ">
      <div className="absolute top-[-50%] right-[2%] w-[110%]">
      <Image src={star3} alt="" />
      </div>
        
      <span className="relative top-[30px] right-[-25px] h-full w-full ">
      
        <Image src={banner} alt="" />
      </span>
      </div>
      <div className="relative h-full w-full md:h-[30%] md:w-[30%] px-7 mb-5 top-[4%] right-[] md:right-[-9%]">
        <div className="relative right-[-5%] md:right-[8%] pb-[18%] pt-[12%] md:pt-[0%] md:pb-[18%] w-[45%] md:w-[60%]">
          <Image src={banner2} alt="" />
        </div>

        <span className={`${sedgwick.className} relative h-full w-[100%] md:h-[30%] md:w-[30%] px-5 mb-5 md:mb-5 md:pl-5 top-[4%]`}>

        
          We are a dynamic group of tech enthusiasts, innovators, and problem-solvers passionate about shaping the future.we thrive on creativity and collaboration. 
          At Esperanza, we aim to push boundaries, showcase groundbreaking ideas, and inspire innovation. Join us on this exciting journey as we turn bold ideas into reality!
          </span>
            <span>
          <a 
  href="/brochure/brochure_merged.pdf"
  target="_blank" 
  rel="noopener noreferrer"
>
          <Image src={group12} alt="" className="pt-15 w-[62%] hover:scale-108 transition-transform duration-400 cursor-pointer"/>
          </a>
        </span>
        
      </div>
      
    </div>
  );
};

export default PhotoContainer;
