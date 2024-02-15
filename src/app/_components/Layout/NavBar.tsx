"use client";

import { useAccount } from "wagmi";
import { Account } from "../Wallet/account";
import { WalletOptions } from "@/app/_components/Wallet/wallet-options";

const ConnectWallet = () => {
  const { isConnected } = useAccount();

  if (typeof window === "undefined") return <></>;

  if (isConnected) {
    return <Account />;
  }
  return <WalletOptions />;
};

export const NavBar = () => {
  return (
    <div className="flex flex-row w-full h-[60px] bg-primary gap-5 items-center justify-end px-4">
      <ConnectWallet></ConnectWallet>
    </div>
  );
};
