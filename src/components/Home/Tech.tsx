"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import techImg from "@/assets/images/Group49.png";
import babyrobot from "@/assets/images/babyrobot.png";
import explore from "@/assets/images/Group45.png";
import star3 from "@/assets/images/Star 2.png";
import { Sedgwick_Ave_Display } from "next/font/google";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})
const Tech = () => {
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
        <h1 className={`${sedgwick.className} text-5xl md:text-8xl font-bold text-gray-200 text-center relative z-10 katibeh-regular`}>
          Technical Events
        </h1>

        <svg
          ref={shadowRef}
          className={`${sedgwick.className} absolute top-7 left-4 w-full h-full katibeh-regular`}
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
            Technical Events
          </text>
        </svg>
      </div>

      
      <div className="flex flex-col md:flex-row gap-20 items-center">

        <div className="flex-1 min-w-[300px] relative top-20">
          <p className={`${sedgwick.className} text-lg text-gray-200 leading-relaxed underdog`}>
            Our technical events showcase the latest innovations and provide a platform for
            enthusiasts to demonstrate their skills. From hackathons to robotics competitions,
            these events challenge participants to push the boundaries of technology. Join us
            for an exciting lineup of workshops, competitions, and networking opportunities
            with industry leaders.
          </p>
          <Link href="/events/technical" passHref legacyBehavior>
          <a  target="_blank" className="inline-block">
          <Image
            src={explore}
            alt=""
            width={270}
            className='pt-[50] hover:scale-108 transition-transform duration-300 cursor-pointer'
          />
          </a>
          </Link>
        </div>

        <div className="flex-1 min-w-[250px] relative top-20 left-0 md:left-40">
          <div className='absolute z-[-1] w-[180%] left-[-130] top-[-130] md:left-[-270] md:top-[-250]'>
            <Image
              src={star3}
              alt=""
              className=''
            />
          </div>
          <div>
            <Image
              src={techImg}
              alt="Technical Events"
              width={400}
              height={300}
              className="shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <Image
              src={babyrobot}
              alt="Robot Mascot"
              width={200}
              height={150}
              className="absolute left-0 bottom-0 hover:scale-110 transition-transform duration-300 cursor-pointer z-10"
              style={{
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.8))'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tech;