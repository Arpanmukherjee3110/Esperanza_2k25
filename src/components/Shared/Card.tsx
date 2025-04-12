"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import CalenderBlank from "@/assets/icons/CalendarBlank.png";
import {Saira_Condensed} from "next/font/google";
import { eventRegister } from "@/actions/eventRegister.action";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const saira_condensed = Saira_Condensed({
  subsets: ["vietnamese"],
  weight: ["700"],
});

function Card({
  eventName,
  eventDescription,
  poster,
  redirect,
  uniqueId,
  userEmail,
}: {
  eventName: string;
  eventDescription: string;
  poster?: string;
  redirect?: string;
  uniqueId:number;
  userEmail?: string;
}) {

  const router = useRouter()

  const handleRegisterForEvent = async ()=>{
    if(!userEmail){
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You need to login first!",
        confirmButtonText: "Okay",
      }).then(()=>{
        router.push("/login")
      })
    }
    const res = await eventRegister(uniqueId,userEmail)
    if(res){
      if(res.error){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.error,
          confirmButtonText: "Okay",
        })
      }else{
        Swal.fire({
          icon: "success",
          title: "Success",
          text: res.message,
          confirmButtonText: "Okay",
        })
      }
    }
    console.log(res);
  }

  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black/50 border-white/[0.1] w-auto sm:w-[18rem] md:w-[20rem] lg:w-[25rem] h-auto rounded-xl p-5 border-[1px]  ">
        <CardItem
          translateZ="50"
          className={`text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-neutral-600 dark:text-white ${saira_condensed.className}`}
        >
          {eventName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {eventDescription}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={poster as string}
            className=" w-[250px] object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href={redirect}
            className="px-4 py-2 rounded-xl text-white  text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600  shadow-md hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Read More ...
          </CardItem>
          <button
            className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold cursor-pointer"
            onClick={handleRegisterForEvent}
          >
            Register
          </button>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export const CardDiv = ({
  reverseAlign = false,
  DateContent,
  eventName,
  eventDescription,
  poster,
  redirect,
  uniqueId,
  userEmail,
}: {
  reverseAlign?: boolean;
  DateContent: any;
  eventName: string;
  eventDescription: string;
  poster?: StaticImageData | string;
  redirect?: string;
  uniqueId:number;
  userEmail?: string;
}) => {
  return (
    <div
      className={`flex flex-1 flex-col md:flex-row items-center justify-between gap-1 w-full cursor-pointer ${
        reverseAlign ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className=" text-end text-xl sm:text-3xl md:text-4xl lg:text-6xl  font-sans animate-pulse">
        <span className="flex gap-2 items-center">
          <Image
            src={CalenderBlank}
            alt=""
            className="w-[50px] sm:w-[75px] md:w-[100px]"
          />
          <span className="font-serif text-fuchsia-300">{DateContent}</span>
        </span>
      </div>
      <div className="flex-1 h-[1px] border-1 border-dashed opacity-45"></div>
      <div className="h-[20px] w-[20px] bg-white rounded-full opacity-50"></div>
      <Card
        eventDescription={eventDescription}
        eventName={eventName}
        poster={poster as string}
        redirect={redirect}
        uniqueId={uniqueId}
        userEmail={userEmail}
      />
    </div>
  );
};
