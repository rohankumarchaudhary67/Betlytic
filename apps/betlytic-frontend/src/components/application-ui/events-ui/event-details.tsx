import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"


export default function EventDetailUI() {
    return (
        <>
            <div className="flex justify-between items-start space-x-6 w-full py-6">
                <div>
                    <div className="flex justify-start items-center">
                        <Image src="/images/cri.jpeg" height={180} width={140} className="rounded-xl" alt="" />
                        <h1 className="pl-4 md:text-3xl font-bold">
                            India to win the 2nd Test vs New Zealand?
                        </h1>
                    </div>

                    <div className="py-4 space-y-6">
                        <Card>
                            <CardHeader className="font-bold text-xl">
                                About the event
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col justify-start items-start">
                                        <span className="font-bold">Source of Truth</span>
                                        <span className="text-muted-foreground">Cricbuzz</span>
                                    </div>
                                    <div className="flex flex-col justify-start items-start">
                                        <span className="font-bold">Trading start on</span>
                                        <span className="text-muted-foreground">11 Nov, 2024</span>
                                    </div>
                                    <div className="flex flex-col justify-start items-start">
                                        <span className="font-bold">Event expire on</span>
                                        <span className="text-muted-foreground">23 Nov, 2024</span>
                                    </div>
                                </div>

                                <div className="flex flex-col pt-6">
                                    <span className="font-bold">Event Overview</span>
                                    <span className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, beatae quis facilis corrupti soluta magnam labore quo quam optio? Atque eaque recusandae quidem! Quam, unde et. Ea repellendus sed a labore obcaecati in inventore qui eveniet delectus, vero explicabo fuga minus, assumenda similique accusantium! Inventore iste cumque illo exercitationem quis accusantium saepe deserunt optio.</span>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>

                <div>
                    <Card>
                        <CardHeader className="flex justify-center items-center w-full">
                            <Tabs defaultValue="account" className="w-full">
                                <TabsList className="w-full">
                                    <TabsTrigger className="px-12" value="account">Yes ₹7.0</TabsTrigger>
                                    <TabsTrigger className="px-12" value="password">No ₹3.5</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </CardHeader>
                        <CardContent>

                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="font-bold">Price</span>
                                    <span className="text-muted-foreground">120 qty available</span>
                                </div>

                                <div className="border p-2 px-3 rounded-lg flex justify-center items-center space-x-4">
                                    <img src="/icons/minus.png" className="h-3" alt="" />
                                    <span className="font-bold">₹3.0</span>
                                    <img src="/icons/plus.png" className="h-3" alt="" />
                                </div>
                            </div>

                            <div className="py-8 flex justify-between items-start">
                                <span className="font-bold">Quantity</span>

                                <div className="border p-2 px-3 rounded-lg flex justify-center items-center space-x-4">
                                    <img src="/icons/minus.png" className="h-3" alt="" />
                                    <span className="font-bold">₹3.0</span>
                                    <img src="/icons/plus.png" className="h-3" alt="" />
                                </div>
                            </div>

                            <div className="flex justify-around items-center">
                                <div className="flex justify-center items-center flex-col">
                                    <span className="font-bold">₹7.0</span>
                                    <span className="text-muted-foreground">You put</span>
                                </div>
                                <div className="flex justify-center items-center flex-col">
                                    <span className="font-bold text-green-500">₹10.0</span>
                                    <span className="text-muted-foreground">You get</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="w-full">
                            <Button variant={"yes"} className="w-full">Place Order</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}