"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
import DuelLogo from "@assets/dapp-logo.png";
import USDT from "@assets/stake-icon.png";

interface ParticipateModalProps {
  onClose: () => void;
  maxUsdt?: number;
  maxDuel?: number;
}

const ParticipateModal: React.FC<ParticipateModalProps> = ({
  onClose,
  maxUsdt = 253,
  maxDuel = 1443,
}) => {
  const [side, setSide] = useState<"for" | "against">("for");
  const [usdt, setUsdt] = useState("");
  const [duel, setDuel] = useState("");

  const isFor = side === "for";
  const blockInvalidNumberInput = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="relative w-72 md:w-[420px] bg-[#1C1C1C] border-2 border-[#36363699] rounded-lg p-6 text-white">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#737373] hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="font-Manrope font-bold text-base md:text-lg mb-4">
          Select {isFor ? "Your Vote" : "Direction/Sentiment"}
        </h2>

        {/* Toggle */}
        <div className="flex gap-3 mb-5">
          <button
            onClick={() => setSide("for")}
            className={`flex-1 flex items-center justify-between px-4 py-3 rounded-md font-Manrope font-bold text-sm ${
              isFor
                ? "bg-[#02BA45] text-white"
                : "bg-[#02BA451A] text-[#02BA4580]"
            }`}
          >
            For
            <MdOutlineKeyboardDoubleArrowUp className="text-xl" />
          </button>

          <button
            onClick={() => setSide("against")}
            className={`flex-1 flex items-center justify-between px-4 py-3 rounded-md font-Manrope font-bold text-sm ${
              !isFor
                ? "bg-[#CF3739] text-white"
                : "bg-[#CF37391A] text-[#CF373980]"
            }`}
          >
            Against
            <MdOutlineKeyboardDoubleArrowDown className="text-xl" />
          </button>
        </div>

        {/* USDT */}
        <div className="flex justify-between text-sm font-semibold mb-2">
          <span>Duel With USDT</span>
          <span className="text-[#53AE94]">{maxUsdt} USDT</span>
        </div>

        <div className="relative mb-4">
          <input
            type="number"
            min="0"
            step="0.01"
            value={usdt}
            onChange={(e) => setUsdt(e.target.value)}
            onKeyDown={blockInvalidNumberInput}
            placeholder="0.00 USDT"
            className="w-full bg-transparent border border-[#FFFFFF33] rounded-md p-4 text-sm text-white"
          />
          <Image
            src={USDT}
            alt="USDT"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>

        {/* DUEL */}
        <div className="flex justify-between text-sm font-semibold mb-2">
          <span>Duel With DUEL</span>
          <span className="text-[#F7CA15]">{maxDuel} DUEL</span>
        </div>

        <div className="relative mb-6">
          <input
            type="number"
            min="0"
            step="0.01"
            value={duel}
            onChange={(e) => setDuel(e.target.value)}
            onKeyDown={blockInvalidNumberInput}
            placeholder="0.00 DUEL"
            className="w-full bg-transparent border border-[#FFFFFF33] rounded-md p-4 text-sm text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Image
            src={DuelLogo}
            alt="DUEL"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>

        {/* Done */}
        <button
          className={`w-full py-3 rounded-md font-Manrope font-bold text-sm ${
            isFor ? "bg-[#02BA45]" : "bg-[#CF3739]"
          }`}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ParticipateModal;
