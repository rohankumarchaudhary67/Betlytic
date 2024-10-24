'use client'
import { useState } from "react"

export default function EventBarUI() {

    const [type, setType] = useState("All events");

    const handleChangeType = (e: any) => {
        setType(e);
    }

    const events = ["All events", "Cricket", "News", "Elections", "YouTube"]

    return (
        <>
            <div className="border-b w-full h-10 flex justify-start items-center pt-2">
                <div className="md:px-16 flex justify-start items-center space-x-4">
                    {events.map((event, index) => (
                        <div key={index} className={`px-4 pb-3 cursor-pointer ${type==event && "font-semibold border-b border-primary"}`} onClick={()=>{handleChangeType(event)}}>
                            {event}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}