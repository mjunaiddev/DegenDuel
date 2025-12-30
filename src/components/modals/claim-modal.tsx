import React from "react";
import Image from "next/image";
import USDTIcon from "@assets/stake-icon.png";
import DuelIcon from "@assets/dapp-logo.png";

const ClaimModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="relative w-72 md:w-[580px] border-2 border-[#36363699] rounded-lg bg-[#1C1C1C] p-10 text-white">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 px-1 md:px-2 text-[#737373] hover:text-[#363636] md:text-2xl font-bold"
      >
        ✕
      </button>
      <div className="md:w-[420px] flex flex-col gap-10 mx-auto">
        <h1 className="font-Manrope font-bold text-xl md:text-3xl text-center">
       Claim Your Winnings
        </h1>
        <div className="flex gap-5 items-center justify-between">
         <div className="flex flex-col text-[#53AE94] font-Sora font-bold text-xl md:text-3xl items-center text-center"><Image src={USDTIcon} alt="usdt"/>
         <span>0.00 USDT</span></div>

         <div className="flex flex-col text-[#F7CA15] font-Sora font-bold text-xl md:text-3xl items-center text-center"><Image src={DuelIcon} alt="duel"  width={40} height={40}/>
         <span>0.00 $DUEL</span></div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <button  onClick={onClose} className="flex-1 border border-[#FFFFFF33] p-2 md:p-4 font-Manrope font-semibold text-base text-center rounded-lg">
            Cancel
          </button>
          <button className="flex-1 flex gap-2 items-center justify-center bg-[#F7CA15] p-2 md:p-4 font-Manrope font-bold text-base text-center rounded-lg text-[#161616]">
       Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimModal;
