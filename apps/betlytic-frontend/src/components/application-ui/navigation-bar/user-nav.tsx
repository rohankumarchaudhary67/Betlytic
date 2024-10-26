import { Button } from "@/components/ui/button";
import { userAtom } from "@/recoil-store/atoms/user-atom";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

export default function UserNavUI() {

    const setUser = useSetRecoilState(userAtom);

    return (
        <>
            <div className="flex justify-center items-center space-x-2">
                <Link href={"/portfolio"}><Button variant={"outline"}><img src="/icons/portfolio.png" className="h-4" alt="" />Portfolio</Button></Link>
                <Link href={"/wallet"}><Button variant={"outline"} className="font-bold"><img src="/icons/wallet.png" className="h-4" alt="" />₹100.35</Button></Link>
                <Button variant={"outline"} onClick={()=>{setUser(false)}}><img src="/icons/logout.png" className="h-4" alt="" />Logout</Button>
            </div>
        </>
    )
}