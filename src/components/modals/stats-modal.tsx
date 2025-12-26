import React from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
import DuelLogo from "@assets/dapp-logo.png";
import USDT from "@assets/stake-icon.png";

const StatsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div className="relative w-[580px] border-2 border-[#36363699] rounded-lg bg-[#1C1C1C] p-8 text-white">
         <button
            onClick={onClose}
            className="absolute top-3 right-3 px-1 md:px-2 text-[#737373] hover:text-[#363636] md:text-2xl font-bold"
          >
            ✕
          </button>
        <h1 className="font-Manrope font-bold text-4xl text-center">
          DUEL STATS
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center font-Manrope font-semibold text-xl">
            <Image src={USDT} alt="USDT" /> USDT
          </div>
          <div className="flex justify-between p-5 rounded-[10px] bg-[#02BA451A] text-[#02BA45]  font-Manrope font-semibold text-xl">
            <div className="flex  items-center">
              <MdOutlineKeyboardDoubleArrowUp className="text-4xl"/>
              <span>For</span>
            </div>
            <div>Total: 120 USDT</div>
          </div>
           <div className="flex justify-between p-5 rounded-[10px] bg-[#CF37391A] text-[#CF3739]  font-Manrope font-semibold text-xl">
            <div className="flex  items-center">
              <MdOutlineKeyboardDoubleArrowDown className="text-4xl"/>
              <span>For</span>
            </div>
            <div>Total: 120 USDT</div>
          </div>

           <div className="flex gap-2 items-center font-Manrope font-semibold text-xl">
            <Image src={DuelLogo} alt="Duel" /> DUEL
          </div>
          <div className="flex justify-between p-5 rounded-[10px] bg-[#02BA451A] text-[#02BA45]  font-Manrope font-semibold text-xl">
            <div className="flex  items-center">
              <MdOutlineKeyboardDoubleArrowUp className="text-4xl"/>
              <span>For</span>
            </div>
            <div>Total: 120 DUEL</div>
          </div>
           <div className="flex justify-between p-5 rounded-[10px] bg-[#CF37391A] text-[#CF3739]  font-Manrope font-semibold text-xl">
            <div className="flex  items-center">
              <MdOutlineKeyboardDoubleArrowDown className="text-4xl"/>
              <span>For</span>
            </div>
            <div>Total: 120 DUEL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsModal;
