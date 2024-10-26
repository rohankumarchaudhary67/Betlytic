'use client'
import Link from "next/link";
import AuthButton from "./auth";
import UserNavUI from "./user-nav";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/recoil-store/atoms/user-atom";
import { ModeToggle } from "@/components/mode-toggle";

export default function NavbarCompUI() {

    const user = useRecoilValue(userAtom);

    return (
        <>
            <div className="w-full pt-2 h-16 fixed top-0 flex justify-between items-center md:px-6 xl:px-72 bg-background">
                <Link href={"/"}>
                    <div className="flex justify-center items-center space-x-2">
                        <img src="/logo/candlestick.png" className="h-8" alt="" />
                        <h1 className="text-2xl font-bold">
                            Betlytic
                        </h1>
                    </div>
                </Link>
                <div className="space-x-4 flex justify-center items-center">
                    <div className="flex flex-col justify-end items-end">
                        <span className="text-sm text-muted-foreground">For 18 years and</span>
                        <span className="text-sm text-muted-foreground">above only</span>
                    </div>
                    <ModeToggle />
                    {user==false ? <AuthButton /> : <UserNavUI />}
                </div>
            </div>
        </>
    )
}