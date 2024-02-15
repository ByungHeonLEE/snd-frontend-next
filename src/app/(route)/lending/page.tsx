"use client";

import { useReadContract, useWriteContract } from "wagmi";
import {
  cdpContractAbi,
  cdpContractAddress,
} from "@/app/_contract/cdpContract";
import { LendingButton } from "@/app/_components/Common/Button";
import { useEffect, useState } from "react";

import { type UseReadContractReturnType } from "wagmi";

export default function Lending() {
  const [cdpPositionId, setCdpPositionId] = useState("");

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
    <div>
      <LendingButton
        onClick={() => {
          openCdpPosition();
        }}
      >
        open
      </LendingButton>
      <div>{cdpPositionId}</div>
    </div>
  );
}
