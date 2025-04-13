import Image from 'next/image';
import img1 from '@/assets/developers/arpan.jpg';
import img2 from '@/assets/developers/ayan.jpg';
import img3 from '@/assets/developers/nabadipta.jpg';
import img4 from '@/assets/developers/rupam.jpg';
import img5 from '@/assets/developers/sayan.jpg';
import img6 from '@/assets/images/BANDATAGLANCE.png';
import img7 from '@/assets/images/babyrobot.png';
import img8 from '@/assets/images/trap.png';
import img9 from '@/assets/images/Group50.png';
import img10 from '@/assets/images/espLogo.png';
import img11 from '@/assets/images/BandPic.png';
import img12 from '@/assets/images/CGEC-Logo-colorful.jpg';
import img13 from '@/assets/images/e1.png';
import img14 from '@/assets/images/e4.png';
import img15 from '@/assets/images/p1.png';

const ClubGrid = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-red-800 flex items-center justify-center p-4 overflow-x-hidden">
        {/* Scaled container with touch support */}
        <div className="relative w-[800px] h-[700px] mx-auto
                        scale-[0.55] sm:scale-[0.65] md:scale-[0.85] lg:scale-100
                        origin-top transition-transform duration-300">

          {/* Top row */}
          <div className="absolute w-[100px] h-[100px] top-[50px] left-[180px] 
                          border-2 border-cyan-300/50 rounded-lg 
                          hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
                          active:border-cyan-300 active:shadow-[0_0_20px_rgba(34,211,238,0.8)]
                          md:hover:border-cyan-300 md:hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img1} alt="S1" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[100px] h-[100px] top-[50px] left-[290px] 
                          border-2 border-purple-300/50 rounded-lg 
                          hover:border-purple-300 hover:shadow-[0_0_15px_rgba(216,180,254,0.6)]
                          active:border-purple-300 active:shadow-[0_0_20px_rgba(216,180,254,0.8)]
                          md:hover:border-purple-300 md:hover:shadow-[0_0_15px_rgba(216,180,254,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img2} alt="S2" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[210px] h-[200px] top-[165px] left-[180px] 
                          border-2 border-emerald-300/50 rounded-lg 
                          hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(110,231,183,0.6)]
                          active:border-emerald-300 active:shadow-[0_0_25px_rgba(110,231,183,0.8)]
                          md:hover:border-emerald-300 md:hover:shadow-[0_0_20px_rgba(110,231,183,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img3} alt="B1" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          {/* Bottom row */}
          <div className="absolute w-[100px] h-[100px] top-[375px] left-[180px] 
                          border-2 border-pink-300/50 rounded-lg 
                          hover:border-pink-300 hover:shadow-[0_0_15px_rgba(249,168,212,0.6)]
                          active:border-pink-300 active:shadow-[0_0_20px_rgba(249,168,212,0.8)]
                          md:hover:border-pink-300 md:hover:shadow-[0_0_15px_rgba(249,168,212,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img4} alt="S3" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[100px] h-[100px] top-[580px] left-[399px] 
                          border-2 border-blue-300/50 rounded-lg 
                          hover:border-blue-300 hover:shadow-[0_0_15px_rgba(147,197,253,0.6)]
                          active:border-blue-300 active:shadow-[0_0_20px_rgba(147,197,253,0.8)]
                          md:hover:border-blue-300 md:hover:shadow-[0_0_15px_rgba(147,197,253,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img5} alt="S4" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[100px] h-[100px] top-[470px] left-[510px] 
                          border-2 border-amber-300/50 rounded-lg 
                          hover:border-amber-300 hover:shadow-[0_0_15px_rgba(252,211,77,0.6)]
                          active:border-amber-300 active:shadow-[0_0_20px_rgba(252,211,77,0.8)]
                          md:hover:border-amber-300 md:hover:shadow-[0_0_15px_rgba(252,211,77,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img6} alt="S13" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[200px] h-[200px] top-[376px] left-[300px] 
                          border-2 border-indigo-300/50 rounded-lg 
                          hover:border-indigo-300 hover:shadow-[0_0_20px_rgba(165,180,252,0.6)]
                          active:border-indigo-300 active:shadow-[0_0_25px_rgba(165,180,252,0.8)]
                          md:hover:border-indigo-300 md:hover:shadow-[0_0_20px_rgba(165,180,252,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img7} alt="B2" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          {/* Left column */}
          <div className="absolute w-[100px] h-[100px] top-[165px] left-[70px] 
                          border-2 border-teal-300/50 rounded-lg 
                          hover:border-teal-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.6)]
                          active:border-teal-300 active:shadow-[0_0_20px_rgba(45,212,191,0.8)]
                          md:hover:border-teal-300 md:hover:shadow-[0_0_15px_rgba(45,212,191,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img8} alt="S5" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[100px] h-[100px] top-[270px] left-[70px] 
                          border-2 border-fuchsia-300/50 rounded-lg 
                          hover:border-fuchsia-300 hover:shadow-[0_0_15px_rgba(240,171,252,0.6)]
                          active:border-fuchsia-300 active:shadow-[0_0_20px_rgba(240,171,252,0.8)]
                          md:hover:border-fuchsia-300 md:hover:shadow-[0_0_15px_rgba(240,171,252,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img9} alt="S6" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[200px] h-[200px] top-[260px] left-[510px] 
                          border-2 border-sky-300/50 rounded-lg 
                          hover:border-sky-300 hover:shadow-[0_0_20px_rgba(125,211,252,0.6)]
                          active:border-sky-300 active:shadow-[0_0_25px_rgba(125,211,252,0.8)]
                          md:hover:border-sky-300 md:hover:shadow-[0_0_20px_rgba(125,211,252,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img10} alt="B3" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          {/* Right column */}
          <div className="absolute w-[100px] h-[100px] top-[165px] left-[400px] 
                          border-2 border-rose-300/50 rounded-lg 
                          hover:border-rose-300 hover:shadow-[0_0_15px_rgba(253,164,175,0.6)]
                          active:border-rose-300 active:shadow-[0_0_20px_rgba(253,164,175,0.8)]
                          md:hover:border-rose-300 md:hover:shadow-[0_0_15px_rgba(253,164,175,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img11} alt="S7" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[100px] h-[100px] top-[270px] left-[400px] 
                          border-2 border-lime-300/50 rounded-lg 
                          hover:border-lime-300 hover:shadow-[0_0_15px_rgba(190,242,100,0.6)]
                          active:border-lime-300 active:shadow-[0_0_20px_rgba(190,242,100,0.8)]
                          md:hover:border-lime-300 md:hover:shadow-[0_0_15px_rgba(190,242,100,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img12} alt="S8" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[200px] h-[200px] top-[50px] left-[510px] 
                          border-2 border-violet-300/50 rounded-lg 
                          hover:border-violet-300 hover:shadow-[0_0_20px_rgba(196,181,253,0.6)]
                          active:border-violet-300 active:shadow-[0_0_25px_rgba(196,181,253,0.8)]
                          md:hover:border-violet-300 md:hover:shadow-[0_0_20px_rgba(196,181,253,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img13} alt="B4" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          {/* Top right */}
          <div className="absolute w-[100px] h-[100px] top-[150px] left-[720px] 
                          border-2 border-yellow-300/50 rounded-lg 
                          hover:border-yellow-300 hover:shadow-[0_0_15px_rgba(253,230,138,0.6)]
                          active:border-yellow-300 active:shadow-[0_0_20px_rgba(253,230,138,0.8)]
                          md:hover:border-yellow-300 md:hover:shadow-[0_0_15px_rgba(253,230,138,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img14} alt="S10" layout="fill" objectFit="cover" className="rounded-md" />
          </div>

          <div className="absolute w-[100px] h-[100px] top-[260px] left-[720px] 
                          border-2 border-green-300/50 rounded-lg 
                          hover:border-green-300 hover:shadow-[0_0_15px_rgba(134,239,172,0.6)]
                          active:border-green-300 active:shadow-[0_0_20px_rgba(134,239,172,0.8)]
                          md:hover:border-green-300 md:hover:shadow-[0_0_15px_rgba(134,239,172,0.6)]
                          transition-all duration-300 ease-in-out">
            <Image src={img15} alt="S9" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
        </div>
      </div>
    );
};

export default ClubGrid;