"use server"

import { Event } from "@/interfaces/events.interface"
import { Events } from "@/models/events.model"
import { connectDB } from "@/utils/db/connect"

const fetchAllEvents = async ()=>{
    try {
        await connectDB()
        const events = await Events.find({}) as Event[]
        return events
    } catch (error:any) {
        console.log("Error fetching events: ", error.message)
        return null
    }
}

export {fetchAllEvents}