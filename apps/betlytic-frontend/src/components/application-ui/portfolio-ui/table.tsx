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


export default function PortfolioTableUI() {
    return (
        <>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Event</TableHead>
                            <TableHead>Investment</TableHead>
                            <TableHead>Gain</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium flex justify-start items-center space-x-2">
                            <Image src="/images/cri.jpeg" height={100} width={60} className="rounded-sm" alt="" />
                            <span>India to win the 2nd Test vs New Zealand?</span></TableCell>
                            <TableCell>₹0.0</TableCell>
                            <TableCell>₹0.0 (0.0%)</TableCell>
                            <TableCell className="text-right"><Button variant={"ghost"} className="rounded-md">Exit<img src="/icons/logout.png" className="h-4" alt="" /></Button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium flex justify-start items-center space-x-2">
                            <Image src="/images/cri.jpeg" height={100} width={60} className="rounded-sm" alt="" />
                            <span>India to win the 2nd Test vs New Zealand?</span></TableCell>
                            <TableCell>₹0.0</TableCell>
                            <TableCell>₹0.0 (0.0%)</TableCell>
                            <TableCell className="text-right"><Button variant={"ghost"} className="rounded-md">Exit<img src="/icons/logout.png" className="h-4" alt="" /></Button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium flex justify-start items-center space-x-2">
                            <Image src="/images/cri.jpeg" height={100} width={60} className="rounded-sm" alt="" />
                            <span>India to win the 2nd Test vs New Zealand?</span></TableCell>
                            <TableCell>₹0.0</TableCell>
                            <TableCell>₹0.0 (0.0%)</TableCell>
                            <TableCell className="text-right"><Button variant={"ghost"} className="rounded-md">Exit<img src="/icons/logout.png" className="h-4" alt="" /></Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </>
    )
}