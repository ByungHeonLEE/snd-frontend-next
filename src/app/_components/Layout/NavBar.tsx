"use client";

import { useAccount } from "wagmi";
import { Account } from "../Wallet/account";
import { WalletOptions } from "@/app/_components/Wallet/wallet-options";
import Link from "next/link";
import Image from "next/image";

import logoImage from '@/app/_assets/logo.png';

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
    <div className="w-full h-[60px] flex flex-row justify-between items-center px-4">
      <div className="flex flex-row justify-start items-center gap-5">
        <div className="justify-center items-center">
          <Link href="/">
            <div className='relative w-10 h-10 cursor-pointer rounded-full'>
              <Image src={logoImage} alt="logo" fill objectFit="contain" />
            </div>
          </Link>
        </div>
        <div className="text-1624 flex flex-row justify-start items-center gap-5">
          <Link href="/"> Home </Link>
          <Link href="/marketplace"> MarketPlace</Link>
          {/* menu */}
          <Link href="/lending">Lending</Link>
        </div>
      </div>
      <div className="flex flex-row bg-primary gap-5 items-center justify-end rounded-xl">
        <ConnectWallet></ConnectWallet>
      </div>
    </div>

  );
};
