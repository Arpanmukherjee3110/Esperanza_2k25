import logo from "../../assets/logo.png";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const locationInfo =
    "https://www.google.com/maps/place/Cooch+Behar+Government+Engineering+College/data=!4m2!3m1!1s0x0:0xe4952b5891bb2389?sa=X&ved=1t:2428&ictx=111";

  return (
    <footer className="bg-white text-gray-800 py-8 px-6 border-t border-gray-200">
      <div className="container mx-auto">
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo and Title Section - now in single column */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src={logo}
              alt="Esperanza Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-gray-900"
                style={{
                  fontFamily: 'Inter, sans-serif',

                  fontWeight: 800,

                  fontSize: '31.5px',}}
              >ESPERANZA'25</div>
              <div className="text-sm font-bold text-gray-900"
                      style={{
                        fontFamily: 'Inter, sans-serif',
      
                        fontWeight: 800,
      
                        fontSize: '21.5px',}}>© Esperanza CGEC</div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="text-center  md:text-left">


            <h3 className="text-base font-semibold mb-2 text-gray-900 underline"
             style={{
              fontFamily: 'Inter, sans-serif',

              fontWeight: 800,

              fontSize: '21.5px',}}>ABOUT US</h3>
            <ul className="space-y-1">
              <li className="text-sm text-gray-600">Teams Committee</li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-2 text-gray-900 underline"
             style={{
              fontFamily: 'Inter, sans-serif',

              fontWeight: 800,

              fontSize: '21.5px',}}>ADDRESS</h3>
            <address className="text-sm text-gray-900 not-italic">
              <a
                href={locationInfo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Cooch Behar Government Engineering College
                <br /> Vill-Harinchowrah, P.O- Ghughumari
                <br /> Dist-Cooch Behar, West Bengal, PIN-736170
              </a>
            </address>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-2 text-gray-900 underline"
             style={{
              fontFamily: 'Inter, sans-serif',

              fontWeight: 800,

              fontSize: '21.5px',}}>SOCIAL</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/esperanza.cgec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/esperanza_cgec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/esperanza-cgec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;