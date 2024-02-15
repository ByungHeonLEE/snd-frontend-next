"use client";

import useHover from "@/app/_hooks/useHover";
import { abbr } from "@/app/_utils/abbrWallet";
import { useEffect, useRef, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";

export function Account() {
  const ref = useRef(null);

  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const [hoverRef, isHovered] = useHover(ref);

  return (
    <div
      ref={hoverRef}
      className="flex flex-row justify-center items-center w-[130px] text-1624 p-4 bg-blue-200 rounded-lg cursor-pointer hover:bg-red-300 duration-150"
      onClick={() => {
        address ? disconnect() : null;
      }}
    >
      {address && <div>{isHovered ? "Disconnect" : abbr(address)}</div>}
    </div>
  );
}
