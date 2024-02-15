"use client";

import { useReadContract, useWriteContract } from "wagmi";
import {
  cdpContractAbi,
  cdpContractAddress,
} from "@/app/_contract/cdpContract";
import { LendingButton } from "@/app/_components/Common/Button";
import { useEffect, useState } from "react";

import { type UseReadContractReturnType } from "wagmi";
import { Card } from "@/app/_components/Common/Card";
import { LendingTable } from "./_components/lendingTable";
import { LendingController } from "./_components/lendingController";

export default function Lending() {
  const [cdpPositionId, setCdpPositionId] = useState("");

  const [isSupply, setIsSupply] = useState(true);

  const { writeContract } = useWriteContract();

  const result: UseReadContractReturnType = useReadContract({
    abi: cdpContractAbi,
    address: "0x585c82f7DAc53263800b59D276d573ef87Af8119",
    functionName: "id",
  });

  const openCdpPosition = () => {
    writeContract(
      {
        abi: cdpContractAbi,
        address: "0x585c82f7DAc53263800b59D276d573ef87Af8119",
        functionName: "open",
        args: [],
      },
      {
        onSuccess: (txHash) => {
          console.log(txHash);
        },
        onSettled: (txHash) => {
          console.log(txHash);
        },
        onError(error, variables, context) {
          console.log(error, variables, context);
        },
      },
    );
  };

  useEffect(() => {
    if (result.data) {
      console.log(result);
      setCdpPositionId(result.data.toString());
    }
  }, [result]);

  return (
    // <div>
    //   <LendingButton
    //     onClick={() => {
    //       openCdpPosition();
    //     }}
    //   >
    //     open
    //   </LendingButton>
    //   <div>{cdpPositionId}</div>
    // </div>
    <div className="flex flex-col justify-start items-start w-full bg-point gap-5">
      <Card className="flex flex-row justify-between items-start p-5">
        <div className="text-2842 font-semibold">
          Supernova
        </div>
        <div className="text-1624">
          <div>Net Worth $0</div>
          <div>APY 0.00%</div>
        </div>
      </Card>

      <div className="flex flex-row w-full h-[100px] gap-2">
        <Card className="flex flex-col w-1/3 p-3 gap-5">
          <div className="text-2024 w-full whitespace-nowrap">Your Supplies</div>
          <div>Price</div>
        </Card>
        <Card className="flex flex-col w-1/3 p-3 gap-5">
          <div className="text-2024 w-full whitespace-nowrap">Your Borrows</div>
          <div>Price</div>
        </Card>
        <Card className="flex flex-col w-1/3 p-3 gap-5">
          <div className="text-2024 w-full whitespace-nowrap">Health Factor</div>
          <div>%</div>
        </Card>
      </div>
      <div className="flex flex-row w-full gap-2">
        <LendingTable></LendingTable>
        <LendingController isSupply={isSupply} setIsSupply={setIsSupply}></LendingController>
      </div>

    </div>
  );
}
