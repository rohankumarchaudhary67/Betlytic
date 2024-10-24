import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"


export default function EventCardUI() {
    return (
        <>
            <Link href={"/eventid"}>
                <Card className="cursor-pointer">
                    <CardHeader className="p-4">
                        <div className="flex justify-start items-center space-x-3">
                            <img src="/images/trader.png" className="h-4" alt="" />
                            <h1>2434 trader</h1>
                        </div>
                        <div className="flex justify-start items-start space-x-4 py-2">
                            <Image src="/images/cri.jpeg" height={80} width={80} className="rounded-lg" alt="" />
                            <CardTitle className="pt-2 ">India to win the 2nd Test series vs New Zealand?</CardTitle>
                        </div>
                        <CardDescription>CNew Zealand @ 201/5 (62 ov) | H2H last 5 Test : New Zealand 3, IND 1, DRAW 1</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-around w-full items-center space-x-4">
                        <Button className="w-full" variant={"yes"}>Yes ₹7.0</Button>
                        <Button className="w-full" variant={"no"}>No ₹4.0</Button>
                    </CardFooter>
                </Card></Link>
        </>
    )
}