"use client";

import { NavBar } from "./NavBar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen bg-white">
      <NavBar></NavBar>
      <div className="flex flex-col items-center justify-start w-full max-w-[1200px]">
        {children}
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};
