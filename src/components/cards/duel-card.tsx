"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

type DuelStatus = "active" | "ended" | "finalized";
type Direction = "up" | "down";

interface DuelCardProps {
  asset: string;                 // BTC
  assetIcon: any;                // Bitcoin icon
  direction: Direction;          // up | down
  createdPrice: number;
  currentPrice: number;
  endTime: string;               // ISO date string
  status: DuelStatus;
  onDetail?: () => void;
  onParticipate?: () => void;
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
}) => {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  function getRemainingTime() {
    const diff = new Date(endTime).getTime() - Date.now();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    if (status !== "active") return;

    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, status]);

  return (
    <div className="w-[280px] bg-[#1C1C1C] border border-[#36363699] rounded-[12px] p-4 text-white">

      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <Image src={assetIcon} alt={asset} width={36} height={36} />
          <div>
            <p className="font-Manrope font-bold text-lg">{asset}</p>
            <div
              className={`flex items-center gap-1 text-sm font-semibold ${
                direction === "up" ? "text-[#02BA45]" : "text-[#CF3739]"
              }`}
            >
              {direction === "up" ? (
                <MdOutlineKeyboardDoubleArrowUp />
              ) : (
                <MdOutlineKeyboardDoubleArrowDown />
              )}
              {direction === "up" ? "Up" : "Down"}
            </div>
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            status === "active"
              ? "bg-[#1E3A2B] text-[#02BA45]"
              : status === "ended"
              ? "bg-[#3A2A1E] text-[#F7CA15]"
              : "bg-[#2A2A2A] text-[#868686]"
          }`}
        >
          ● {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Prices */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-[#B0B0B0]">Created Price:</span>
          <span>${createdPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#02BA45]">Current Price:</span>
          <span className="text-[#02BA45]">
            ${currentPrice.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Countdown */}
      {status === "active" && timeLeft && (
        <div className="mt-4">
          <p className="text-xs text-[#B0B0B0] mb-2">Ends In:</p>
          <div className="grid grid-cols-4 gap-2 text-center text-sm">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div
                key={label}
                className="bg-[#2A2A2A] rounded-md py-1"
              >
                <p className="font-bold">{String(value).padStart(2, "0")}</p>
                <p className="text-[10px] text-[#868686] uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={onDetail}
          className="flex-1 border border-[#36363699] rounded-md py-2 text-sm hover:bg-[#2A2A2A]"
        >
          Detail
        </button>

        <button
          onClick={onParticipate}
          disabled={status !== "active"}
          className={`flex-1 rounded-md py-2 text-sm font-bold ${
            status === "active"
              ? "bg-[#F7CA15] text-black"
              : "bg-[#373737] text-[#868686] cursor-not-allowed"
          }`}
        >
          Participate
        </button>
      </div>
    </div>
  );
};

export default DuelCard;
