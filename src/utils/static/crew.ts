import  ayan  from '@/assets/developers/ayan.jpg';
import  sayan  from '@/assets/developers/sayan.jpg';
import  arpan  from '@/assets/developers/arpan.jpg';
import { TeamMember } from "@/interfaces/team.interface";

export const teamMembers : TeamMember[]  = [
    {
        name : "Arpan Mukherjee",
        department : "ECE",
        year : "3rd",
        avatar : arpan,
        category : ["technical"],
        lead : "tech-lead"
    },
    {
        name : "Sayan Sutradhar",
        department : "CSE",
        year : "3rd",
        avatar : sayan,
        category : ["technical"]
    },
    {
        name : "Ayan Das",
        department : "CSE",
        year : "3rd",
        avatar : ayan,
        category : ["technical"],
    },
]