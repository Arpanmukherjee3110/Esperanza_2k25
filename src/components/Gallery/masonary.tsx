"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import pic1 from "@/assets/galary/cultural/WhatsApp Image 2025-03-31 at 22.22.49_a2993b86.jpg";
import pic2 from "@/assets/galary/cultural/WhatsApp Image 2025-03-31 at 22.22.50_5222b856.jpg";
import pic3 from "@/assets/galary/cultural/pic7.jpg";
import pic4 from "@/assets/galary/cultural/WhatsApp Image 2025-04-07 at 20.09.08_87185433.jpg";
import pic5 from "@/assets/galary/cultural/WhatsApp Image 2025-04-07 at 20.09.15_7bf6a830.jpg";
import pic6 from "@/assets/galary/cultural/WhatsApp Image 2025-03-31 at 22.22.51_f4a3566c.jpg";
import pic7 from "@/assets/galary/cultural/41643706_170059960579670_314263805020340224_n.jpg";
const galleryItems = [
  // Row 1
  {
    id: 1,
    src: pic1,
    span: "col-span-1 sm:col-span-1",
    height: "h-[200px] sm:h-[250px]"
  },
  {
    id: 2,
    src: pic2,
    span: "col-span-1 sm:col-span-1",
    height: "h-[200px] sm:h-[250px]"
  },
  {
    id: 3,
    src:pic3,
    span: "col-span-2 sm:col-span-2",
    height: "h-[200px] sm:h-[250px]"
  },
  // Row 2
  {
    id: 4,
    src: pic4,
    span: "col-span-2 sm:col-span-2",
    height: "h-[250px] sm:h-[300px]"
  },
  {
    id: 5,
    src: pic5,
    span: "col-span-2 sm:col-span-2",
    height: "h-[250px] sm:h-[300px]"
  },
  // Row 3
  {
    id: 6,
    src: pic6,
    span: "col-span-2 sm:col-span-2",
    height: "h-[250px] sm:h-[300px]"
  },
  {
    id: 7,
    src: pic7,
    span: "col-span-2 sm:col-span-1",
    height: "h-[250px] sm:h-[300px]"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?auto=format&fit=crop&w=1740",
    span: "col-span-2 sm:col-span-1",
    height: "h-[125px] sm:h-[150px]"
  },
  // Row 4
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1740",
    span: "col-span-2 sm:col-span-2",
    height: "h-[200px] sm:h-[250px]"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1740",
    span: "col-span-2 sm:col-span-1",
    height: "h-[200px] sm:h-[250px]"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1740",
    span: "col-span-2 sm:col-span-1",
    height: "h-[100px] sm:h-[125px]"
  },
  // Row 5
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1740",
    span: "col-span-2 sm:col-span-1",
    height: "h-[200px] sm:h-[250px]"
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1740",
    span: "col-span-2 sm:col-span-1",
    height: "h-[200px] sm:h-[250px]"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1740",
    span: "col-span-2 sm:col-span-1",
    height: "h-[200px] sm:h-[250px]"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?auto=format&fit=crop&w=1740",
    span: "col-span-2 sm:col-span-1",
    height: "h-[200px] sm:h-[250px]"
  }
];

export default function MasonryGallery() {
  return (
    <div className="p-2 sm:p-4">
      <div className="grid grid-cols-4 gap-2 sm:gap-4 mx-auto max-w-7xl">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className={`relative ${item.span} ${item.height} group`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 border-2 border-neutral-800 z-10 rounded-lg transition-colors duration-300 group-hover:border-white" />
              <Image
                src={item.src}
                alt={`Gallery item ${item.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}