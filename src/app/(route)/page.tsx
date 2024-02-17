"use client";

import { useState, useEffect } from "react";
import { UseReadContractReturnType, useReadContract, useWriteContract } from "wagmi";
import {
  cdpContractAbi,
  cdpContractAddress,
} from "@/app/_contract/cdpContract";

import {
  cdpViewAbi,
} from "@/app/_contract/cdpView";

import { Card } from "../_components/Common/Card";
import { LendingButton } from "../_components/Common/Button";
import Link from "next/link";

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

interface ApiResponse {
  totalCollateralValue: string; // This is just an example
}

export default function Home() {
  const [tvl, setTvl] = useState(1204555550978);
  const [newTotalCollateral, setNewTotalCollateral] = useState<string>('');

  const realTVL: UseReadContractReturnType = useReadContract({
    abi: cdpContractAbi,
    address: "0x585c82f7DAc53263800b59D276d573ef87Af8119",
    functionName: "totalCollateral",
  });

  const view: UseReadContractReturnType = useReadContract({
    abi: cdpViewAbi,
    address: "0x9015fC8DDb1a54C2a3B958Ac61F3a9BA7513cdd1",
    functionName: "getUserInfo",
    args: ["0xDcf6866f372292F9c03317811FD57679598c8e61"],
  });

  const cdpInfoData = view.data as CDPInfo[];

  function test() {
    const data = view.data as CDPInfo[];
    console.log(data);
  }

  return (
    <div className="flex flex-col justify-start items-center w-full p-5 gap-6">
      {/* Title */}
      <Card className="flex flex-col justify-center items-center w-full h-[120px] p-5">
        <div className="text-2842 p-2" onClick={test}>Total Value Locked (TVL)

        </div>
        <div className="text-2024">
          TVL: ${" "}
          {realTVL.data !== undefined ? (Number(realTVL.data) / 10 ** 12).toLocaleString("en-us", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
          }) : 'Loading...'}
        </div>
      </Card>
      {/*  */}
      <div className="flex flex-row w-full gap-6">
        <Card className="flex flex-col justify-start items-start p-5">
          <div className="text-2842">Total Collateral</div>
          <div className="text-1624">Deposited ETH:{cdpInfoData && cdpInfoData.length > 0 ? (Number(cdpInfoData[0].collateralAmount) / 10 ** 18).toFixed(4) : 'Loading...'}</div>
          <div className="text-1624">Deposited USDC: {cdpInfoData && cdpInfoData.length > 0 ? (Number(cdpInfoData[0].collateralAmount) / 10 ** 18).toFixed(4) : 'Loading...'}</div>
          <div className="text-1624 py-5">Aggregated Price: ${cdpInfoData && cdpInfoData.length > 0 ? (Number(cdpInfoData[0].collateralAmount) / 10 ** 36 * Number(cdpInfoData[0].collateralPrice)).toFixed(4) : 'Loading...'} </div>
          <div className="flex flex-row justify-end items-center w-full">
            <Link href="lending/">
              <LendingButton>Deposit</LendingButton>
            </Link>
          </div>
        </Card>
        <Card className="flex flex-col justify-start items-start p-5">
          <div className="text-2842">Total Borrowed</div>
          <div className="text-1624">Borrowed ETH: {cdpInfoData && cdpInfoData.length > 0 ? Number(cdpInfoData[0].debtAmount) / 10 ** 18 : 'Loading...'}</div>
          <div className="text-1624">Borrowed USDC: {cdpInfoData && cdpInfoData.length > 0 ? Number(cdpInfoData[0].debtAmount) / 10 ** 18 : 'Loading...'}</div>
          <div className="text-1624 py-5">Aggregated Price: ${cdpInfoData && cdpInfoData.length > 0 ? (Number(cdpInfoData[0].debtAmount) / 10 ** 36 * Number(cdpInfoData[0].debtPrice)) : 'Loading...'}</div>
          <div className="flex flex-row justify-end items-center w-full">
            <Link href="lending/">
              <LendingButton>Borrow</LendingButton>
            </Link>
          </div>
        </Card>
      </div>

      <Card className="flex flex-col justify-start items-start p-5">
        <div className="text-2842">Transaction History</div>
      </Card>
    </div>
  );
}
