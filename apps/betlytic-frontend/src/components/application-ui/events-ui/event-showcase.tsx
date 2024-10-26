import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EventCardUI from "./event-card";

export default function EventShowcaseUI() {
    return (
        <>
            <div className="flex space-x-2">
                <div className="grid grid-cols-2 gap-4 w-full">
                    <EventCardUI />
                    <EventCardUI />
                    <EventCardUI />
                    <EventCardUI />
                    <EventCardUI />
                </div>
                <div className="flex justify-start items-start flex-col md:hidden xl:flex p-4">
                    <h1 className="font-bold text-xl">Disclaimer</h1>
                    <h1>This game may be habit-forming or financially risky. Play Responsibly.</h1>
                </div>
            </div>
        </>
    )
}