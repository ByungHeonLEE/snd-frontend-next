"use client";

import * as React from "react";
import { useConnect } from "wagmi";
import { metaMask } from "wagmi/connectors";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return (
    <div
      className="flex flex-row justify-center items-center w-[130px] text-1624 p-4 bg-blue-200 rounded-lg cursor-pointer hover:bg-blue-300 duration-150 whitespace-nowrap"
      onClick={() => {
        connect({
          connector: metaMask(),
        });
      }}
    >
      Connect Wallet
    </div>
  );
}
