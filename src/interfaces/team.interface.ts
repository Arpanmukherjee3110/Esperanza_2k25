import { StaticImageData } from "next/image";

export interface TeamMember {
  name: string;
  year: "1st" | "2nd" | "3rd" | "4th";
  department: "CE" | "CSE" | "ECE" | "EE" | "ME";
  category: Array<
    | "technical"
    | "cultural"
    | "sponsor"
    | "pr"
    | "management"
    | "hospitality"
    | "finance"
    | "content"
    | "decoration"
    | "security"
    | "stage management"
    >;
  avatar: StaticImageData;
  lead?:
    | "tech-lead"
    | "cultural-lead"
    | "vice-president"
    | "joint-secretary"
    | "tech-head"
    | "cultural-head"
    | "president"
    | "secretary"
    | "tech Co-head";
  socials?: {
    handler: "LinkedIn" | "Instagram" | "Github" | "Facebook";
    link: string;
  }[];
}
