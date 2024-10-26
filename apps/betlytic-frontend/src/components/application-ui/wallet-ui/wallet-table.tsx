import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"


export default function WalletTableUI() {
    return (
        <>
            <div className="px-4 pt-2">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Transaction</TableHead>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Amout</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium flex flex-col justify-center items-start space-y-2">
                                <span>DEBIT</span>
                                <span className="text-primary text-sm font-light">'Sourav Joshi - Bada Bomb Le Liya' video to have views between 3.177M and 3.501M at 12:00 AM?</span>
                                <span className="text-muted-foreground">October 24, 2024 at 11:29 AM</span>
                            </TableCell>
                            <TableCell>1162419382</TableCell>
                            <TableCell className="text-green-600 font-bold">Success</TableCell>
                            <TableCell className="text-right text-red-600 font-bold">-₹4</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium flex flex-col justify-center items-start space-y-2">
                                <span>CREDIT</span>
                                <span className="text-primary text-sm font-light">'Sourav Joshi - Bada Bomb Le Liya' video to have views between 3.177M and 3.501M at 12:00 AM?</span>
                                <span className="text-muted-foreground">October 24, 2024 at 11:29 AM</span>
                            </TableCell>
                            <TableCell>1162419382</TableCell>
                            <TableCell className="text-red-600 font-bold">Failed</TableCell>
                            <TableCell className="text-right text-primary font-bold">-₹40</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium flex flex-col justify-center items-start space-y-2">
                                <span>DEBIT</span>
                                <span className="text-primary text-sm font-light">'Sourav Joshi - Bada Bomb Le Liya' video to have views between 3.177M and 3.501M at 12:00 AM?</span>
                                <span className="text-muted-foreground">October 24, 2024 at 11:29 AM</span>
                            </TableCell>
                            <TableCell>1162419382</TableCell>
                            <TableCell className="text-green-600 font-bold">Success</TableCell>
                            <TableCell className="text-right text-green-600 font-bold">+₹24</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </>
    )
}