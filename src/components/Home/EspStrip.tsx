import Image from "next/image";
import espStrip from "@/assets/images/Strip.png";

const EspStrip = () => {
  return (
    <div className="w-full">
      <Image src={espStrip} alt="" height={50} className="w-full p-0 relative top-[-14px]" />
    </div>
  );
};

export default EspStrip;
