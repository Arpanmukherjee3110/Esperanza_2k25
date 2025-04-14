"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import img1 from "@/assets/developers/arpan.jpg";
import img2 from "@/assets/developers/ayan.jpg";
import img3 from "@/assets/developers/sayan.jpg";
import img4 from "@/assets/developers/rupam.jpg";
import img5 from "@/assets/developers/nabadipta.jpg";
import ploygon54 from "@/assets/images/Polygon54.png";
import ploygon52 from "@/assets/images/Polygon52.png";

const galleryImages = [
  { id: 1, img: img1, alt: "Arpan", role: "Developer" },
  { id: 2, img: img2, alt: "Ayan", role: "Designer" },
  { id: 3, img: img3, alt: "Sayan", role: "Developer" },
  { id: 4, img: img4, alt: "Rupam", role: "Developer" },
  { id: 5, img: img5, alt: "Nabadipto", role: "Designer" },
  { id: 6, img: img1, alt: "Arpan", role: "Developer" },
  { id: 7, img: img2, alt: "Ayan", role: "Designer" }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -10px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.6 }
  }
};

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.23,
    once: false,
    margin: "0px 0px -100px 0px"
  });

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-60 md:mt-40 lg:mt-120 px-4 sm:px-6 lg:px-8" 
    >
      <div className="relative inline-block mb-8 mx-auto w-full">
        <motion.h1 
          className="text-7xl md:text-8xl font-bold text-gray-200 text-center relative z-10 katibeh-regular"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          GALLERY
        </motion.h1>

        <motion.svg
          className="absolute top-7 left-4 w-full h-full katibeh-regular"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewBox="0 0 500 100"
        >
          
          <text
            x="50%"
            y="80%"
            textAnchor="middle"
            className="text-8xl md:text-8xl"
            fill="transparent"
            stroke="#999999"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset={isInView ? 0 : 1000}
            style={{
              transition: "stroke-dashoffset 1.5s ease-in-out"
            }}
          >
            GALLERY
          </text>
        </motion.svg>
      </div>

      <div className="absolute z-[-1] md:right-[-2]">
        <Image 
        src={ploygon54} 
        alt=''
        width={700}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 mb-8 mt-60" 
      >
        {galleryImages.map((item, idx) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={hoverVariants.hover}
            whileTap={{ scale: 0.98 }}
            className={`relative rounded-xl overflow-hidden shadow-lg ${
              idx % 4 === 0 ? "col-span-2 row-span-2 aspect-[2/1]" : "aspect-square"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                placeholder="blur"
              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.4 }
                }}
              >
                <h3 className="text-white font-medium text-lg drop-shadow-md">{item.alt}</h3>
                <p className="text-white/90 text-sm drop-shadow-md">{item.role}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute z-[-1] -left-2 -translate-y-160
">
        <Image 
        src={ploygon52} 
        alt=''
        width={900}
        />
      </div>
    </section>
  );
}


