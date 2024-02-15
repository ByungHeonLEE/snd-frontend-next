"use client";

import { useState } from "react";
import { Card } from "../_components/Common/Card";
import { LendingButton } from "../_components/Common/Button";
import Link from "next/link";

export default function Home() {
  const [tvl, setTvl] = useState(1204783890174978120984);

  return (
    <div className="flex flex-col justify-start items-center w-full bg-point pt-10 gap-12">
      {/* Title */}
      <Card className="flex flex-col justify-center items-center w-full h-[100px] p-5">
        <div className="text-2842">Total Value Locked (TVL)</div>
        <div className="text-2024">
          TVL: ${" "}
          {tvl.toLocaleString("en-us", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
          })}
        </div>
      </Card>
      {/*  */}
      <div className="flex flex-row w-full gap-12">
        <Card className="flex flex-col justify-start items-start p-5">
          <div className="text-2842">Total Collateral</div>
          <div className="text-2024">staked ETH</div>
          <div className="text-2024">staked Wemix</div>
          <div className="text-2024">Price: $ Wemix</div>
          <div className="flex flex-row justify-end items-center w-full">
            <Link href="lending/">
              <LendingButton>Deposit</LendingButton>
            </Link>
          </div>
        </Card>
        <Card className="flex flex-col justify-start items-start p-5">
          <div className="text-2842">Total Borrowed</div>
          <div className="text-2024">borrowed ETH</div>
          <div className="text-2024">borrowed Wemix</div>
          <div className="text-2024">Price: $ Wemix</div>
          <div className="flex flex-row justify-end items-center w-full">
            <Link href="lending/">
              <LendingButton>Borrow</LendingButton>
            </Link>
          </div>
        </Card>
      </div>
      <Card className="flex flex-col justify-start items-start p-5">
        Cex
      </Card>
    </div>
  );
}
