// import Image from "next/image";
// import espStrip from "@/assets/images/Strip.png";

// const EspStrip = () => {
//   return (
//     <div className="w-full">
//       <Image src={espStrip} alt="" height={50} className="w-full p-0 relative top-[-14px]" />
//     </div>
//   );
// };

// export default EspStrip;

"use client";

import { useEffect, useState } from "react";
import logoesp from "@/assets/logo.png";
import Image from "next/image";

export default function MarqueeText() {
  const text = "#ESPERANZA '25 "; 
  const letters = text.split(""); 
  const [activeLetter, setActiveLetter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLetter((prev) => (prev + 1) % letters.length);
    }, 600); 

    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <div className="w-full overflow-hidden bg-black py-4">
      {/* Marquee Container */}
      <div className="marquee text-white text-4xl font-bold tracking-wider flex items-center">
        {/* Repeat the content 10 times */}
        {[...Array(8)].map((_, i) => (
          <span key={i} className="flex whitespace-nowrap items-center">
            {/* Render the text with color transition */}
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-500 mx-1 ${
                  index === activeLetter ? "opacity-100 shadow-glow" : "opacity-50"
                }`}
              >
                {letter} 
              </span>
            ))}
             <Image
              src={logoesp} 
              alt="Logo"
              width={50}
              height={70}
              className="mx-15"
              
            />
          </span>
        ))}
       
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
        }
          .marquee:hover{
          animation: paused;
          cursor:pointer;
          }
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
          
          .shadow-glow {
          text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8),
                       0px 0px 20px rgba(232, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}
