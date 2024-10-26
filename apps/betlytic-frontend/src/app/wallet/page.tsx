import WalletTableUI from "@/components/application-ui/wallet-ui/wallet-table";

export default function Wallet() {
    return (
        <>
            <div className="md:py-24 md:px-12 xl:px-96 space-y-8">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col px-4 py-2">
                        <span className="text-muted-foreground font-bold text-lg">
                            Total Balance
                        </span>
                        <span className="text-primary font-bold text-2xl md:text-4xl">
                            ₹ 100.35
                        </span>
                    </div>
                        <WalletTableUI />
                </div>
            </div>
        </>
    )
}