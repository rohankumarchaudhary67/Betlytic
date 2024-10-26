'use client'

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface RecoilProviderProps {
    children: ReactNode
}

const RecoilProvider: React.FC<RecoilProviderProps> = ({children}) => {
    return(
        <>
            <RecoilRoot>
                {children}
            </RecoilRoot>
        </>
    )
}

export default RecoilProvider;