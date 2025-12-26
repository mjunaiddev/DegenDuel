import React from "react";
import Image from "next/image";
import Link from "next/link";
import DappLogo from "@assets/dapp-logo.png";

const Dappnav = () => {
  return (
    <div className="bg-[#161616] w-full px-2 border-b-2 border-[#363636] fixed top-0">
      <div className="container mx-auto flex items-center justify-between h-[100px] px-4 lg:px-0">
        <Link href={"/"}>
        <Image src={DappLogo} alt="Dapp Logo"/>
        </Link>
       <Link href={"/dapp/duels"}> <button className="bg-[#F7CA15] rounded-[10px] px-8 py-2 md:px-16 md:py-3 font-Manrope font-bold text-base">Wallet</button></Link>
      </div>
    </div>
  );
};

export default Dappnav;
