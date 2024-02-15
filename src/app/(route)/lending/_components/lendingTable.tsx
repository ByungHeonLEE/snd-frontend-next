import { Card } from "@/app/_components/Common/Card"
interface TableRowProps {
    assets: string;
    walletBalance: string;
    apy: string;
    totalValueLocked: string;
    id: string;
}



const TableRow = ({assets, walletBalance, apy, totalValueLocked, id}: TableRowProps) => {
    return (
        <div className="flex flex-row items-center border-t-2 border-black h-10 px-5">
            <div className="w-1/5">
                {assets}
            </div>
            <div className="w-1/5">
            {walletBalance}
            </div>
            <div className="w-1/5">
                {apy}
            </div>
            <div className="w-1/5">
                {totalValueLocked}
            </div>
            <div className="w-1/5">
                {id}
            </div>
        </div>
    )
}

export const LendingTable = () => {

    // TODO : Replace with actual data
    const dummyData = [
        {
            assets: "ETH",
            walletBalance: "0",
            apy: "0",
            totalValueLocked: "0",
            id: "0"
        },
        {
            assets: "Wemix",
            walletBalance: "1000",
            apy: "4.00",
            totalValueLocked: "1235",
            id: "1"
        },
        {
            assets: "stWemix",
            walletBalance: "12345",
            apy: "3.01",
            totalValueLocked: "644",
            id: "2"
        }
    ]

    return (
        <div className="flex flex-col w-2/3 justify-start items-start gap-5">
            <Card className="flex flex-col">
                <div className="text-2842">Your Supplies</div>
                <div className="text-2024">nothing supplied yet</div>
                <div className="text-2024">Ether</div>
                <div className="text-2024">Price: $ Wemix</div>
            </Card>

            <Card className="flex flex-col">
                <div className="flex flex-row h-12 items-center px-5">
                    <div className="w-1/5 text-2024">
                        Assets
                    </div>
                    <div className="w-1/5 text-2024">
                        Wallet Balance
                    </div>
                    <div className="w-1/5 text-2024">
                        APY %
                    </div>
                    <div className="w-1/5 text-1624">
                        Total Value Locked
                    </div>
                    <div className="w-1/5 text-2024">
                        Actions
                    </div>
                </div>
                {dummyData.map((data, index) => {
                    return <TableRow key={`table${index}`} assets={data.assets} walletBalance={data.walletBalance} apy={data.apy} totalValueLocked={data.totalValueLocked} id={data.id} />
                })}
            </Card>
        </div>
    )

}