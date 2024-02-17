"use client";

import { useReadContract, useWriteContract } from "wagmi";
import {
  cdpContractAbi,
  cdpContractAddress,
} from "@/app/_contract/cdpContract";

import { cdpViewAbi } from "@/app/_contract/cdpView";

import { LendingButton } from "@/app/_components/Common/Button";
import { useEffect, useState } from "react";

import { type UseReadContractReturnType } from "wagmi";
import { Card } from "@/app/_components/Common/Card";
import { LendingTable } from "./_components/lendingTable";
import { LendingController } from "./_components/lendingController";
import { wethContractAbi } from "@/app/_contract/wethContract";

export type Token = "ETH" | "USDT" | "USDC";

interface CDPInfo {
  cdpAddress: string,
  collateralAmount: string,
  collateralPrice: string,
  collateralSymbol: string,
  collateralToken: string,
  debtAmount: string,
  debtPrice: string,
  debtSymbol: string,
  debtToken: string,
  feeRatio: string,
  globalHealthFactor: string,
  globalLTV: string,
}

interface UserInfo {
  cdpAddress: string,
  id: string,
  isSafe: string,
  currentLTV: string,
  healthFactor: string,
  collateral: string,
  debt: string,
  fee: string,
  latestUpdate: string,
}


export default function Lending() {
  const [cdpPositionId, setCdpPositionId] = useState("");

  const view: UseReadContractReturnType = useReadContract({
    abi: cdpViewAbi,
    address: "0x9015fC8DDb1a54C2a3B958Ac61F3a9BA7513cdd1",
    functionName: "getCDPInfo",
  });
  // to-do - user 진짜 address 넣기
  const userInfo: UseReadContractReturnType = useReadContract({
    abi: cdpViewAbi,
    address: "0x9015fC8DDb1a54C2a3B958Ac61F3a9BA7513cdd1",
    functionName: "getUserInfo",
    args: ["0xDcf6866f372292F9c03317811FD57679598c8e61"],
  });

  const cdpInfoData = view.data as CDPInfo[];
  const userInfoData = userInfo.data as UserInfo[];
  // userInfoData의 length 체크해ㅔ서 id 가져오면 된다 보여줘야하면


  const [isSupply, setIsSupply] = useState(true);
  const [selectedToken, setSelectedToken] = useState<Token>("ETH");

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

  const approveWeth = () => {
    writeContract(
      {
        abi: wethContractAbi,
        address: "0x24457b0983B5D18Ed0e60bD7eAeB871c8072F275",
        functionName: "approve",
        args: [
          "0x585c82f7DAc53263800b59D276d573ef87Af8119",
          "5000000000000001",
        ],
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

  const depositCdpPosition = () => {
    writeContract(
      {
        abi: cdpContractAbi,
        address: "0x585c82f7DAc53263800b59D276d573ef87Af8119",
        functionName: "deposit",
        args: [2, 5000000000000001],
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
    <div className="flex flex-col justify-start items-start w-full gap-5 p-5">
      <Card className="flex flex-row justify-between items-start p-5">
        <div className="text-2842 font-semibold">Supernova</div>
        <div>
          {/* <LendingButton
            onClick={() => {
              openCdpPosition();
              // approveWeth();
              // depositCdpPosition();
            }}
          >
            open
          </LendingButton> */}
          {/* <div>{cdpPositionId}</div> */}
        </div>
        <div className="text-1624">
          <div>Net Worth $0</div>
          <div>APY 0.00%</div>
        </div>
      </Card>

      <div className="flex flex-row w-full h-[100px] gap-2">
        <Card className="flex flex-col w-1/3 p-3 gap-5">
          <div className="text-2024 w-full whitespace-nowrap">
            Your Supplies
          </div>
          <div className="text-1624">$ {userInfoData && userInfoData.length > 0 ? (Number(userInfoData[0].collateral) / 10 ** 18).toFixed(4) : 'Loading...'}</div>
        </Card>
        <Card className="flex flex-col w-1/3 p-3 gap-5">
          <div className="text-2024 w-full whitespace-nowrap">Your Borrows</div>
          <div className="text-1624">$ {userInfoData && userInfoData.length > 0 ? (Number(userInfoData[0].debt) / 10 ** 18).toFixed(4) : 'Loading...'}</div>
        </Card>
        <Card className="flex flex-col w-1/3 p-3 gap-5">
          <div className="text-2024 w-full whitespace-nowrap">
            Health Factor 
          </div>
          <div className="text-2842 items-center">{userInfoData && userInfoData.length > 0 ? (Number(userInfoData[0].healthFactor)).toFixed(4) : 'Loading...'}</div>
        </Card>
      </div>
      <div className="flex flex-row w-full gap-2">
        <LendingTable isSupply={isSupply}></LendingTable>
        <LendingController
          isSupply={isSupply}
          setIsSupply={setIsSupply}
          selectedToken={selectedToken}
        ></LendingController>
      </div>
    </div>
  );
}
