export interface Event {
  uniqueId?: string;
  eventName: string;
  eventDescription: string;
  eventDate: string;
  eventStartTime: string;
  eventEndTime: string;
  venue: string;
  eventCategory: "technical" | "cultural";
  ruleBookLink: string;
  leads: {
    name: string;
    year: "1st" | "2nd" | "3rd" | "4th";
    department: "CSE" | "ECE" | "EEE" | "ME" | "CE" | "IT";
    contact: string;
  }[];
  participants: any[];
}
