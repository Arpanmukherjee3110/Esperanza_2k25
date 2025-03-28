import Image from "next/image";
import Link from "next/link";
import espLogo from "@/assets/images/espLogo.png";

const Header = () => {
  return (
    <div className="fixed top-0 h-[125px] w-screen z-50 bg-black/10 backdrop-blur-sm">
      <div className="flex justify-between items-center h-full md:px-10">
        <div className="md:flex flex-1 justify-around hidden gap-4 items-center">
          <Link href={""}>Home</Link>
          <Link href={""}>Team</Link>
          <Link href={""}>Gallery</Link>
          <Link href={""}>Sponser</Link>
        </div>
        <div>
          <Image src={espLogo} alt="" height={125} width={125} />
        </div>
        <div className="md:flex flex-1 justify-around hidden gap-4 items-center">
          <Link href={""}>Technical Events</Link>
          <Link href={""}>Cultural Events</Link>
          <Link href={""}>About</Link>
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
