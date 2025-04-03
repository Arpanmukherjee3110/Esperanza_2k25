import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import Logo from "@/components/Shared/espLogoAnim";

const Header = async() => {

  const session = await auth()
  console.log(session);
  

  return (
    <div className="fixed top-0 h-[125px] w-screen z-50 bg-black/10 backdrop-blur-sm">
      <div className="flex justify-between items-center h-full md:px-10">
        <div className="md:flex flex-1 justify-around hidden gap-4 items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/team"}>Team</Link>
          <Link href={"/gallery"}>Gallery</Link>
          <Link href={"/sponsers"}>Sponser</Link>
        </div>
        <div>
          <Logo/>
        </div>
        <div className="md:flex flex-1 justify-around hidden gap-4 items-center">
          <Link href={"/events/technical"}>Technical Events</Link>
          <Link href={"/events/cultural"}>Cultural Events</Link>
          <Link href={"/about"}>About</Link>
          {/* <Link href={"/login"}>Login</Link> */}
          {session?.user? (
            <Link href={"/profile"}>Profile</Link>
          ) : (
            <Link href={"/login"}>Login</Link>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Header;
