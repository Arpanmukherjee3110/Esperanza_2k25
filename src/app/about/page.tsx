import RadialBgRed from "@/assets/background/RadialBgRed.png";
import AboutUs from "@/assets/images/about us.png";

import contactUs from "@/assets/images/CONTACT US.png";
import Hexagon from "@/assets/images/Hexagon.png";
import Image from "next/image";
import ContactUsForm from "@/components/About/ContactUsForm";
import Container from "@/components/Shared/Container";
import Map from "@/components/Shared/Map";
import { Katibeh,Sedgwick_Ave_Display } from "next/font/google";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})
const katibeh = Katibeh({
  subsets: ["arabic"],
  weight: ["400"],
});

const About = () => {
  return (
    <div className="mt-[125px] min-h-[90vh] relative overflow-hidden">
      <Image
        src={RadialBgRed}
        alt="background"
        className="opacity-20 sm:opacity-40 md:opacity-55 lg:opacity-65 absolute left-1/2 transform -translate-x-1/2 z-0"
      />
      <Image src={Hexagon} alt="hexagon decoration" className="absolute z-0" />

      {/* About Us Section */}
      <div className="flex flex-col items-center py-10 relative z-20">
        <Container>
          <div className="flex justify-center relative z-30 w-full max-w-[700px] mx-auto">
            <Image
              src={AboutUs}
              alt="about us"
              className="object-contain"
              priority
            />
          </div>
        </Container>
      </div>

      {/* Contact Us Section */}
      <div className="px-4 sm:px-8 py-10 relative z-10">
        <Container>
          <div className="flex justify-center mb-12 lg:mb-16">
            <Image
              src={contactUs}
              alt="contact us"
              className="object-contain w-full max-w-[600px]"
              priority
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 justify-between items-start w-full">
            {/* Left Column - Address & Map */}
            <div className="flex-1 w-full lg:max-w-[45%] xl:max-w-[40%]">
              <Map />
            </div>

            {/* Right Column - Contact Form */}
            <div className="flex-1 w-full lg:max-w-[50%] xl:max-w-[55%]">
              <div className="mb-8">
                <h3
                  className={`${sedgwick.className} text-4xl xl:text-5xl mb-6 relative inline-block`}
                >
                  CONTACT US
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-current"></span>
                </h3>
                <h3 className={`${sedgwick.className} `}>
                  PH.NO - 1234567891 <br />
                  MAIL - ABCD@GMAIL.COM
                </h3>
              </div>

              <div className=" text-white px-3 py-6 sm:p-8 rounded-lg w-full">
                <h2 className={`${sedgwick.className} text-2xl sm:text-3xl font-bold mb-4 `}>
                  GET IN TOUCH
                </h2 >
                <p className={`${sedgwick.className} text-lg sm:text-xl mb-6 `}>
                  We are here for you! How can we help?
                </p>

                <ContactUsForm />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
