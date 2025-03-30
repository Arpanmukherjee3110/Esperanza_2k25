"use client";
import HexagonWhite from "@/assets/background/HexagonWhite.png";
import RadialBgRed from "@/assets/background/RadialBgRed.png";
import Hexagon from "@/assets/images/Hexagon.png";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import AboutUs from "@/assets/images/about us.png";
import { Katibeh } from "next/font/google";
import MapImage from "@/assets/images/map-image.png";
import Cgec from "@/assets/images/CGEC-Logo-colorful.jpg";
import { useState } from "react";
import contactUs from "@/assets/images/CONTACT US.png";

const katibeh = Katibeh({
  subsets: ["arabic"],
  weight: ["400"],
})

const About = () => {
  const locationInfo = "https://www.google.com/maps/place/Cooch+Behar+Government+Engineering+College/data=!4m2!3m1!1s0x0:0xe4952b5891bb2389?sa=X&ved=1t:2428&ictx=111";
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }
    setErrorMessage("");
    console.log("Form submitted", formData);
  };

  return (
    <div className="mt-[125px] min-h-[90vh] relative overflow-hidden">
      <Image src={RadialBgRed} alt="background" className="opacity-20 sm:opacity-40 md:opacity-55 lg:opacity-65 absolute left-1/2 transform -translate-x-1/2 z-0" />
      <Image src={Hexagon} alt="hexagon decoration" className="absolute z-0" />

      {/* About Us Section */}
      <div className="flex flex-col items-center py-10 relative z-20">
        <Container>
          <div className="flex justify-center relative z-30 w-full max-w-[700px] mx-auto">
            <Image src={AboutUs} alt="about us" className="object-contain" priority />
          </div>
        </Container>
      </div>

      {/* Contact Us Section */}
      <div className="px-4 sm:px-8 py-10 relative z-10">
        <Container>
          <div className="flex justify-center mb-12 lg:mb-16">
            <Image src={contactUs} alt="contact us" className="object-contain w-full max-w-[600px]" priority />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 justify-between items-start w-full">
            {/* Left Column - Address & Map */}
            <div className="flex-1 w-full lg:max-w-[45%] xl:max-w-[40%]">
              <div className="mb-8">
                <h3 className={`${katibeh.className} text-4xl xl:text-5xl mb-6 relative inline-block`}>
                  ADDRESS
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-current"></span>
                </h3>
                <p className="text-lg xl:text-xl">
                  <a href={locationInfo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Cooch Behar Government Engineering College
                    <br /> Vill-Harinchowrah, P.O-Ghughumari
                    <br /> Dist-Cooch Behar, West Bengal, PIN-736170
                  </a>
                </p>
              </div>

              <div onClick={() => window.open(locationInfo)} className="mt-8 lg:mt-12">
                <div className="bg-gray-900 hover:cursor-pointer rounded-3xl overflow-hidden border-2 border-white/20 h-[280px] lg:h-[350px] w-full relative">
                  <Image 
                    src={MapImage} 
                    alt="Map Image" 
                    fill
                    className="object-cover" 
                  />
                  <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 border-2 border-sky-500 animate-ping"></div>
                    <Image 
                      src={Cgec} 
                      alt="CGEC Logo" 
                      className="size-20 object-contain p-1 bg-white rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="flex-1 w-full lg:max-w-[50%] xl:max-w-[55%]">
              <div className="mb-8">
                <h3 className={`${katibeh.className} text-4xl xl:text-5xl mb-6 relative inline-block`}>
                  CONTACT US
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-current"></span>
                 
                </h3>
                <h3>PH.NO  - 1234567891 <br />
                MAIL - ABCD@GMAIL.COM</h3>
              </div>
              
              <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-lg w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">GET IN TOUCH</h2>
                <p className="text-lg sm:text-xl mb-6">We are here for you! How can we help?</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500" 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium mb-2">Message</label>
                    <textarea 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg h-32 focus:ring-2 focus:ring-blue-500" 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                      required
                    ></textarea>
                  </div>
                  {errorMessage && <p className="text-red-500 text-lg">{errorMessage}</p>}
                  <button 
                    type="submit" 
                    className="w-full p-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold text-white text-lg transition-colors duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;