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

        
        <p>Esperanza 2025 – Ignite the Future, Celebrate the Spirit!</p>

<p>Welcome to Esperanza 2025, the grand annual fest of COOCHBEHAR GOVERNMENT ENGINEERING COLLEG ! This year, we bring you an electrifying fusion of technology and culture, where innovation meets creativity in an unforgettable celebration.
From April 22nd to April 26th, our campus will be transformed into a hub of intellect, artistry, and excitement. The first three days (April 22nd - 24th) will be dedicated to a mesmerizing technical extravaganza, featuring thrilling hackathons, coding challenges, robotics competitions, and much more. It’s your chance to push boundaries, showcase your skills, and compete with the brightest minds.
</p>
Then, get ready to unwind and immerse yourself in the vibrant Cultural Phase on April 25th and 26th! Experience mesmerizing music, dance, drama, fashion shows, and a celebration of diverse cultures.

Join us for Esperanza 2025 – where technology sparks innovation, and culture brings us together! Stay tuned for event details, registrations, and exciting surprises.

<p>Let’s make memories. Let’s make history.</p>
          </span>
            <span>
          <a 
  href=""
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
