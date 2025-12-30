"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
import Timer from "@components/timer";
import { FaShareFromSquare } from "react-icons/fa6";
import ShareModal from "../modals/share-modal";
import USDTIcon from "@assets/stake-icon.png";
import DuelIcon from "@assets/dapp-logo.png";
import ClaimModal from "../modals/claim-modal";

type DuelStatus = "active" | "ended" | "finalized";
type Direction = "up" | "down";

export interface DuelCardProps {
  asset: string;
  assetIcon: any;
  direction: Direction;
  createdPrice: number;
  currentPrice: number;
  duration: number;
  status: DuelStatus;
  onDetail?: () => void;
  onParticipate?: () => void;
  onFinalize?: () => void;
}

const DuelCard: React.FC<DuelCardProps> = ({
  asset,
  assetIcon,
  direction,
  createdPrice,
  currentPrice,
  duration,
  status,
  onDetail,
  onParticipate,
  onFinalize,
}) => {
  const [openShareModal, setOpenShareModal] = useState(false);
  const [openClaimModal, setOpenClaimModal] = useState(false);
  const [finalizedCurrency, setFinalizedCurrency] = useState<"usdt" | "duel">(
    "usdt"
  );

  return (
    <div className="w-72 md:w-80 bg-[#1C1C1C] border-2 border-[#36363699] rounded-[10px] p-4 text-white mx-auto sm:mx-0">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <Image src={assetIcon} alt={asset} width={54} height={54} />
          <div>
            <p className="font-Manrope font-extrabold text-lg md:text-2xl">
              {asset}
            </p>
            <div
              className={`flex items-center gap-1 font-semibold text-sm ${
                direction === "up" ? "text-[#02BA45]" : "text-[#CF3739]"
              }`}
            >
              {direction === "up" ? (
                <MdOutlineKeyboardDoubleArrowUp className="text-lg md:text-2xl" />
              ) : (
                <MdOutlineKeyboardDoubleArrowDown className="text-lg md:text-2xl" />
              )}
              {direction === "up" ? "Up" : "Down"}
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              status === "active"
                ? "bg-[#1E3A2B] text-[#02BA45]"
                : status === "ended"
                ? "bg-[#8F8F8F1A] text-[#8F8F8F]"
                : "bg-[#019AF91A] text-[#019AF9]"
            }`}
          >
            ● {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <button
            onClick={() => {
              setOpenShareModal(true);
            }}
            className="bg-[#FFFFFF0F] px-2 py-1 rounded-md"
          >
            <FaShareFromSquare />
          </button>
        </div>
      </div>

      {/* ACTIVE & ENDED ONLY */}
      {status !== "finalized" && (
        <>
          <div className="mt-4 space-y-2 text-sm font-Manrope font-semibold">
            <div className="flex justify-between bg-[#FFFFFF0F] rounded-[10px] p-3">
              <span>Created Price:</span>
              <span>${createdPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between bg-[#FFFFFF0F] rounded-[10px] p-3">
              <span className="text-[#02BA45]">Current Price:</span>
              <span className="text-[#02BA45]">
                ${currentPrice.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Ends In:</p>
            <Timer duration={duration} />
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={onDetail}
              className="flex-1 border border-[#FFFFFF33] rounded-md p-3 text-sm"
            >
              Detail
            </button>

            <button
              onClick={status === "ended" ? onFinalize : onParticipate}
              className="flex-1 border border-[#F7CA15] rounded-md p-3 bg-[#F7CA15]/40 text-[#F7CA15] font-bold"
            >
              {status === "ended" ? "Finalize" : "Participate"}
            </button>
          </div>
        </>
      )}

      {/* FINALIZED */}
      {status === "finalized" && (
        <div className="mt-5 space-y-3">
          {/* Currency Toggle */}
          <div className="flex border border-[#D9D9D933] rounded-lg  w-[180px] mx-auto">
            <button
              onClick={() => setFinalizedCurrency("usdt")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-Manrope font-semibold text-sm md:text-base ${
                finalizedCurrency === "usdt"
                  ? "bg-[#53AE9433] border border-[#53AE94]"
                  : "text-[#7F7F7F]"
              }`}
            >
              <Image src={USDTIcon} alt="USDT" width={25} height={25} />
              USDT
            </button>

            <button
              onClick={() => setFinalizedCurrency("duel")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md font-bold ${
                finalizedCurrency === "duel"
                  ? "bg-[#F7CA1533] border border-[#F7CA15]"
                  : "text-[#7F7F7F]"
              }`}
            >
              <Image src={DuelIcon} alt="DUEL" width={30} height={30} />
              DUEL
            </button>
          </div>

          {/* For */}
          <div className="flex justify-between items-center px-2 py-2 md:px-5 md:py-3 rounded-[10px] bg-[#02BA451A] text-[#02BA4580] font-Manrope font-semibold text-sm md:text-base">
            <span className="flex items-center gap-1">
              <MdOutlineKeyboardDoubleArrowUp className="text-lg md:text-xl" />{" "}
              For
            </span>
            <span>Total: 120 {finalizedCurrency.toUpperCase()}</span>
          </div>

          {/* Against */}
          <div className="flex justify-between items-center px-2 py-2 md:px-5 md:py-3 rounded-[10px] bg-[#2A1516] text-[#CF3739] font-Manrope font-semibold text-sm md:text-base">
            <span className="flex items-center gap-1">
              <MdOutlineKeyboardDoubleArrowDown className="text-lg md:text-xl" />{" "}
              Against
            </span>
            <span>Total: 120 {finalizedCurrency.toUpperCase()}</span>
          </div>

          <button
            onClick={() => {
              setOpenClaimModal(true);
            }}
            className="w-full border border-[#F7CA15] rounded-md p-3 text-[#F7CA15] bg-[#F7CA1533] font-Manrope font-bold text-sm"
          >
            Claim
          </button>
        </div>
      )}

      {openShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <ShareModal onClose={() => setOpenShareModal(false)} />
        </div>
      )}
      {openClaimModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <ClaimModal onClose={() => setOpenClaimModal(false)} />
        </div>
      )}
    </div>
  );
};

export default DuelCard;
