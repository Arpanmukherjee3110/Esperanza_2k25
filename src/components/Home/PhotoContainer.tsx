"use client";
import Link from "next/link";
import banner from "@/assets/images/image8.png";
import banner2 from "@/assets/images/ESPERANZA.png";
import star3 from "@/assets/images/Star 3.png";
import group12 from "@/assets/images/Group12.png";
//import { section } from "framer-motion/client";
import Image from "next/image";
import { Sedgwick_Ave_Display } from "next/font/google";
import {Katibeh} from "next/font/google";
import React, { useEffect, useRef } from 'react';

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})
const katibeh = Katibeh({
  subsets: ["latin"],
  weight: ["400"],
})


const PhotoContainer = () => {
  const shadowRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && shadowRef.current) {
          shadowRef.current.style.transition = 'none';
          shadowRef.current.style.strokeDashoffset = '1000';

          void shadowRef.current.getBoundingClientRect();

          shadowRef.current.style.transition = 'stroke-dashoffset 4s ease-in-out';
          shadowRef.current.style.strokeDashoffset = '0';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <section ref={sectionRef} className="py-16 px-8 max-w-6xl mx-auto">

<div className="relative inline-block mb-12 mx-auto w-full">
        <h1 className={`${katibeh.className} text-5xl md:text-8xl font-bold text-gray-200 text-center relative z-10 katibeh-regular`}>
          ESPERANZA
        </h1>

        <svg
          ref={shadowRef}
          className={`${katibeh.className} absolute top-7 left-4 w-full h-full katibeh-regular`}
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
          }}
        >
          <text
            x="50%"
            y="80%"
            textAnchor="middle"
            className="text-5xl md:text-8xl"
            fill="transparent"
            stroke="#999999"
            strokeWidth="1"
          >
            ESPERANZA
          </text>
        </svg>
      </div>


      <div className="flex flex-col md:flex-row gap-12 items-center">

<div className="flex-1 min-w-[250px] relative top-20 left-[-20] md:left-[-120]">
<div className='absolute z-[-1] w-[120%] top-[-200] left-[-100] '> 
  <Image
  src={star3}
  alt=""
  className=''
  />
  </div>
  <div className="border-white border-[1px]">
  <Image
    src={banner}
    alt="Sidhu"
    width={400}
    height={300}
    className="w-full shadow-md p-1 ml-5"
  />
  </div>
  
</div>

<div className="flex-1 min-w-[300px] relative top-20 left-[0] md:left-[40]">
  <p className={`${sedgwick.className} text-lg text-gray-200 leading-relaxed underdog`}>
  The cultural squad is all set to present a wondrous cultural extravaganza replete with creativity and artistry. 
  brace up to get the spark of melodies, beats, rhythm, steps and arts ignited altogether.
  We welcome everyone to the cultural melting pot to showcase your recreative and extra-curricular talents and 
  inspire the young minds to step beyond the box and fuel the passion - and celebrate all beautiful souls of arts .
  </p>
  <Link href="" passHref legacyBehavior>
  <a target="_blank" className="inline-block">
  <Image
  src={group12}
  alt=""
  width={270}
  className='pt-[50] w-[75%] md:w-full hover:scale-108 transition-transform duration-300 cursor-pointer'
  />
  </a>
  </Link>
</div>
</div>
      
    </section>
  );
};

export default PhotoContainer;

//flex flex-col relative md:flex-row items-center justify-center pt-[8%]
