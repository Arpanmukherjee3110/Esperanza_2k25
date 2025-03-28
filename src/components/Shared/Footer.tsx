import logo from '../../assets/logo.png';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 px-4 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo and Title Section */}
          <div className="flex items-center gap-4">
            <Image 
              src={logo} 
              alt="Esperanza Logo" 
              className="w-16 h-16"
              width={64}
              height={64}
            />
            <div>
              <div className="text-2xl font-bold text-gray-900">ESPERANZA'25</div>
              <div className="text-sm text-gray-500">© Esperanza CGEC</div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">ABOUT US</h3>
            <ul className="space-y-1">
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Teams Committee</li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">ADDRESS</h3>
            <address className="text-gray-600 not-italic">
              Cooch Behar Government Engineering College<br />
              Vili-Harinchowrah, P.O-Ghughumari<br />
              Dist-Cooch Behar, West Bengal, PIN-736170
            </address>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start mt-8 space-x-4">
          <a 
            href="https://www.facebook.com/esperanza.cgec" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://www.instagram.com/esperanza_cgec/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/company/esperanza-cgec/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;