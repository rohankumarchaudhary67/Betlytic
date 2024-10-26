import PortfolioTableUI from "@/components/application-ui/portfolio-ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Portfolio() {
    return (
        <>
            <div className="md:py-24 md:px-12 xl:px-96 space-y-8">
                <div className="flex justify-center items-center">
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="w-full">
                            <TabsTrigger value="account" className="w-full">Active trades</TabsTrigger>
                            <TabsTrigger value="password" className="w-full">Closed trades</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="flex justify-between items-center md:px-8 md:py-4 bg-secondary rounded-xl">
                    <div className="flex flex-col justify-start items-start w-full px-4 py-2">
                        <span className="text-muted-foreground text-xl font-bold">Investement</span>
                        <span className="text-foreground text-2xl font-bold">₹4.5</span>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full px-4 py-2">
                        <span className="text-muted-foreground text-xl font-bold">Gain</span>
                        <span className="text-foreground text-2xl font-bold">₹2.0</span>
                    </div>
                </div>

                <PortfolioTableUI />
            </div>
        </>
    )
}