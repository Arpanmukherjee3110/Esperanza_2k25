// import Image from "next/image";
// import Link from "next/link";
// import { auth } from "@/auth";
// import Logo from "@/components/Shared/espLogoAnim";

// const Header = async() => {

//   const session = await auth()
//   console.log(session);
  

//   return (
//     <div className="fixed top-0 h-[125px] w-screen z-50 bg-black/10 backdrop-blur-sm">
//       <div className="flex justify-between items-center h-full md:px-10">
//         <div className="md:flex flex-1 justify-around hidden gap-4 items-center">
//           <Link href={"/"}>Home</Link>
//           <Link href={"/team"}>Team</Link>
//           <Link href={"/gallery"}>Gallery</Link>
//           <Link href={"/sponsers"}>Sponser</Link>
//         </div>
//         <div>
//           <Logo/>
//         </div>
//         <div className="md:flex flex-1 justify-around hidden gap-4 items-center">
//           <Link href={"/events/technical"}>Technical Events</Link>
//           <Link href={"/events/cultural"}>Cultural Events</Link>
//           <Link href={"/about"}>About</Link>
//           {/* <Link href={"/login"}>Login</Link> */}
//           {session?.user? (
//             <Link href={"/profile"}>Profile</Link>
//           ) : (
//             <Link href={"/login"}>Login</Link>
//           )}
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Header;

"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Shared/espLogoAnim";
import { Katibeh } from "next/font/google";

const katibeh = Katibeh({
  subsets: ["arabic"],
  weight: ["400"],
  // style: "normal"
});

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const linkClass =
    "relative text-white hover:text-red-400 transition-colors duration-300";
  const underline =
    "absolute -bottom-1 left-0 w-0 h-[2px] bg-red-400 transition-all duration-300 group-hover:w-full";

  return (
    <header className="fixed top-0 h-[125px] w-full z-50 bg-black/10 backdrop-blur-sm">
      <div className="flex justify-between items-center h-full px-4 md:px-10">
        {/* Left nav for desktop */}
        <nav className="hidden md:flex flex-1 justify-around items-center gap-4">
          {["/", "/team", "/gallery", "/sponsers"].map((href, idx) => (
            <Link
              key={idx}
              href={href}
              className={`group ${linkClass} ${katibeh.className} text-xl`}
            >
              <span className="capitalize">
                {href === "/" ? "Home" : href.slice(1)}
              </span>
              <span className={underline}></span>
            </Link>
          ))}
        </nav>

        {/* Logo center */}
        <div>
          <Logo />
        </div>

        {/* Right nav for desktop */}
        <nav className="hidden md:flex flex-1 justify-around items-center gap-4 ">
          {["/events/technical", "/events/cultural", "/about", "/login"].map(
            (href, idx) => (
              <Link
                key={idx}
                href={href}
                className={`group ${linkClass} ${katibeh.className} text-xl`}
              >
                <span className="capitalize">
                  {href.split("/").pop()?.replace("-", " ")}
                </span>
                <span className={underline}></span>
              </Link>
            )
          )}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out bg-black/90 backdrop-blur-md px-4 overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-[500px] py-6 opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
<nav className="flex flex-col items-center gap-4">
  {[
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    { label: "Gallery", href: "/gallery" },
    { label: "Sponser", href: "/sponsers" },
    { label: "Technical Events", href: "/events/technical" },
    { label: "Cultural Events", href: "/events/cultural" },
    { label: "About", href: "/about" },
    { label: "Login", href: "/login" },
  ].map((link, i) => (
    <Link
      key={i}
      href={link.href}
      onClick={closeMenu}
      className={`relative group text-white text-xl sm:text-2xl transition-all ${katibeh.className}`}
    >
      <span className="group-hover:text-red-400 transition-colors duration-300">
        {link.label}
      </span>
      {/* Desktop hover animation */}
      <span className="hidden sm:block absolute -bottom-1 left-0 h-[2px] bg-red-400 w-0 transition-all duration-300 group-hover:w-full"></span>

      {/* Mobile: always show animated underline */}
      <span className="block sm:hidden absolute -bottom-1 left-1/2 w-0 h-[2px] bg-red-400 animate-grow-line"></span>
    </Link>
  ))}
</nav>



      </div>
    </header>
  );
};

export default Header;
