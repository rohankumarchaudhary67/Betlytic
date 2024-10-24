import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"



export default function AuthButton() {
    return (
        <>
            <Dialog>
                <DialogTrigger className="bg-primary text-primary-foreground shadow px-4 rounded-md hover:bg-primary/90">Login/Signup</DialogTrigger>
                <DialogContent className="py-16 max-w-2xl flex justify-around items-center px-4">

                    <div className="flex flex-col justify-center items-center min-w-fit px-8">
                        <img src="/logo/candlestick.png" className="h-36" alt="" />
                        <h1 className="text-lg font-semibold">Betlytic</h1>
                        <Separator />
                        <h1 className="text-lg font-semibold text-center">Trade on your opinion</h1>
                    </div>

                    <DialogHeader className="flex flex-col space-y-4 pl-6">
                        <div>
                            <DialogTitle>Enter your email</DialogTitle>
                            <DialogDescription>
                                We will send you an OPT
                            </DialogDescription>
                        </div>

                        <div>
                            <Input id="email" placeholder="example@gmail.com" className="md:min-w-64"></Input>
                        </div>

                        <p className="text-muted-foreground text-sm">By continuing, you accept that you are 18+ years of age and agree to the <span className="text-blue-600 underline">Terms and Conditions</span></p>

                        <Button>Get OTP</Button>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    )
}