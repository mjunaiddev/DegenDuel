"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
import { FaShareFromSquare } from "react-icons/fa6";
import ShareModal from "../modals/share-modal";

type DuelStatus = "active" | "ended" | "finalized";
type Direction = "up" | "down";

export interface DuelCardProps {
  asset: string;
  assetIcon: any;
  direction: Direction;
  createdPrice: number;
  currentPrice: number;
  endTime: string;
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
  endTime,
  status,
  onDetail,
  onParticipate,
  onFinalize,
}) => {
  const calculateTimeLeft = () => {
    const diff = new Date(endTime).getTime() - Date.now();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [openShareModal, setOpenShareModal] = useState(false);
  useEffect(() => {
    if (status !== "active") return;

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, status]);

  return (
    <div className="w-80 bg-[#1C1C1C] border-2 border-[#36363699] rounded-[10px] p-4 text-white">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <Image src={assetIcon} alt={asset} width={54} height={54} />
          <div>
            <p className="font-Manrope font-extrabold text-2xl">{asset}</p>
            <div
              className={`flex items-center gap-1 font-Manrope font-semibold text-sm ${
                direction === "up" ? "text-[#02BA45]" : "text-[#CF3739]"
              }`}
            >
              {direction === "up" ? (
                <MdOutlineKeyboardDoubleArrowUp className="text-2xl" />
              ) : (
                <MdOutlineKeyboardDoubleArrowDown />
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

      {/* Prices */}
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

      {/* Ends In */}
      <div className="mt-4">
        <p className="text-sm font-Manrope font-semibold mb-2">Ends In:</p>

        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2 py-1">
              <p className="bg-[#FFFFFF0F] rounded-md font-Exo font-semibold text-2xl">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-[10px] font-medium uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={onDetail}
          className="flex-1 border border-[#FFFFFF33] rounded-md p-3 font-Manrope font-semibold text-sm hover:bg-[#2A2A2A]"
        >
          Detail
        </button>

        <button
          onClick={
            status === "active"
              ? onParticipate
              : status === "ended"
              ? onFinalize
              : undefined
          }
          disabled={status === "finalized"}
          className={`flex-1 rounded-md p-3 text-sm font-bold border border-[#F7CA15] ${
            status === "active" || status === "ended"
              ? "bg-[#F7CA15]/40 text-[#F7CA15]"
              : "bg-[#373737] text-[#868686] cursor-not-allowed"
          }`}
        >
          {status === "ended" ? "Finalize" : "Participate"}
        </button>
      </div>
       {openShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <ShareModal onClose={() => setOpenShareModal(false)} />
        </div>
      )}
    </div>
  );
};

export default DuelCard;
