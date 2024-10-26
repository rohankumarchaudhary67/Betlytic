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
import { userAtom } from "@/recoil-store/atoms/user-atom";
import { useSetRecoilState } from "recoil";



export default function AuthButton() {

    const setUser = useSetRecoilState(userAtom);

    return (
        <>
            <Dialog>
                <DialogTrigger><span className="border rounded-md px-4 py-2">Login/Signup</span></DialogTrigger>
                <DialogContent className="py-16 max-w-2xl flex justify-around items-center px-4">

                    <div className="flex flex-col justify-center items-center min-w-fit px-8">
                        <img src="/logo/candlestick.png" className="h-36" alt="" />
                        <h1 className="text-lg font-semibold">Betlytic</h1>
                        <Separator />
                        <h1 className="text-lg font-semibold text-center">Trade on your opinion</h1>
                    </div>

                    <DialogHeader className="flex flex-col space-y-4 pl-6 pr-12">
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

                        <Button onClick={()=>{setUser(true)}}>Get OTP</Button>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    )
}