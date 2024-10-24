import AuthButton from "./auth";

export default function NavbarCompUI() {
    return (
        <>
            <div className="w-full pt-2 h-16 fixed top-0 flex justify-between items-center md:px-16 bg-background">
                <div className="flex justify-center items-center space-x-2">
                    <img src="/logo/candlestick.png" className="h-8" alt="" />
                    <h1 className="text-2xl font-bold">
                        Betlytic
                    </h1>
                </div>
                <div className="space-x-4 flex">
                    <div className="flex flex-col justify-end items-end">
                        <span className="text-sm text-muted-foreground">For 18 years and</span>
                        <span className="text-sm text-muted-foreground">above only</span>
                    </div>
                    <AuthButton />
                </div>
            </div>
        </>
    )
}