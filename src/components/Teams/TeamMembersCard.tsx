import { CardSpotlight } from "@/components/ui/card-spotlight";
import { TeamMember } from "@/interfaces/team.interface";
import Image from "next/image";

export function TeamMemebrsCard({member}:{member:TeamMember}) {
  return (
    <CardSpotlight className="max-w-96 rounded-2xl px-4 py-2">
      <h1 className="text-xl text-yellow-200 text-wrap font-bold relative z-20 mt-2">
        {member.name}
      </h1>
      <h1 className="text-xl text-wrap relative z-20 mt-2 text-white">
        {member.year + " " + member.department}
      </h1>
      <div className="text-neutral-200 mt-2 relative z-20">
        <Image src={member.avatar} alt="image" className="w-[300px] p-4 h-[250px] object-cover rounded-2xl"/>
      </div>
      <p className="text-neutral-300 text-xl mt-2 relative z-20 capitalize">
        {member.lead ? member.lead : member.category + " Team"}
      </p>
    </CardSpotlight>
  );
}
