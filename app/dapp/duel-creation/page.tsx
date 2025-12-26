"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

import Bitcoin from "@assets/bitcoin-icon.png";
import Ethereum from "@assets/ethereum-icon.png";
import DuelLogo from "@assets/dapp-logo.png";
import StakeLogo from "@assets/stake-icon.png";

const Page = () => {
  const [crypto, setCrypto] = useState<"BTC" | "ETH">("BTC");
  const [openCrypto, setOpenCrypto] = useState(false);

  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const [vote, setVote] = useState<"for" | "against" | null>(null);
  const [prediction, setPrediction] = useState(2);
  const [duration, setDuration] = useState(30);

  const [participate, setParticipate] = useState(false);
  const [stake, setStake] = useState("");
  const [duelAmount, setDuelAmount] = useState("");

  const formValid =
    crypto &&
    direction &&
    prediction > 0 &&
    duration > 0 &&
    participate &&
    vote &&
    stake &&
    duelAmount;

  return (
    <div className="bg-HeroBg bg-cover min-h-screen">
      <div className="container py-40 text-center">
        <h1 className="pb-5 font-Sora font-semibold text-[40px] text-white">
          Create or <span className="text-[#F7CA15]">Join Duels</span>
        </h1>

        {/* Duel Creation Card */}
        <form className="flex flex-col gap-5 w-[610px] mx-auto bg-[#1C1C1C] border-2 border-[#36363699] rounded-[10px] px-10 py-8 text-left">
          <div className="flex flex-col gap-2 relative">
            <label className="font-Manrope font-semibold text-xl text-white">
              Select Crypto For Duel
            </label>

            <button
              type="button"
              onClick={() => setOpenCrypto(!openCrypto)}
              className="w-full border border-[#F7CA15] rounded-[10px] p-5 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={crypto === "BTC" ? Bitcoin : Ethereum}
                  alt="crypto"
                  width={24}
                  height={24}
                />
                <span className="font-Manrope font-semibold text-xl text-white">
                  {crypto}
                </span>
              </div>
              <FiChevronDown className="text-white" />
            </button>

            {openCrypto && (
              <div className="absolute top-full mt-2 w-full bg-[#1C1C1C] border border-[#36363699] rounded-[10px] overflow-hidden z-10">
                {["BTC", "ETH"].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setCrypto(c as "BTC" | "ETH");
                      setOpenCrypto(false);
                    }}
                    className="w-full flex items-center gap-3 p-4 hover:bg-[#2A2A2A]"
                  >
                    <Image
                      src={c === "BTC" ? Bitcoin : Ethereum}
                      alt={c}
                      width={24}
                      height={24}
                    />
                    <span className="text-white font-semibold">{c}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Direction */}
          <div className="flex flex-col gap-2">
            <label className="flex gap-2 items-center font-Manrope font-semibold text-xl text-white">
              Choose Direction / Sentiment{" "}
              <BsInfoCircle className="text-[#868686]" />
            </label>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setDirection("up")}
                className={`flex-1 flex items-center justify-between px-5 py-3 rounded-[10px] font-Manrope font-extrabold text-xl bg-[#02BA4530] ${
                  direction === "up"
                    ? "bg-[#02BA45] text-white"
                    : "text-[#02BA4580]"
                }`}
              >
                Up <MdOutlineKeyboardDoubleArrowUp className="text-4xl" />
              </button>

              <button
                type="button"
                onClick={() => setDirection("down")}
                className={`flex-1 flex items-center justify-between px-5 py-3 rounded-[10px] font-Manrope font-extrabold text-xl bg-[#CF37391A] ${
                  direction === "down"
                    ? "bg-[#CF3739] text-white"
                    : "text-[#CF373980]"
                }`}
              >
                Down <MdOutlineKeyboardDoubleArrowDown className="text-4xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Prediction */}
            <div className="flex flex-col gap-2">
              <label className="flex gap-2 items-center font-Manrope font-semibold text-xl text-white">
                Prediction % <BsInfoCircle className="text-[#868686]" />
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={prediction}
                  onChange={(e) => setPrediction(+e.target.value)}
                  className="w-full bg-transparent border border-[#FFFFFF33] rounded-[10px] p-5 font-Manrope font-semibold text-xl text-[#FFFFFF80] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => setPrediction((p) => p + 1)}
                  >
                    <FiChevronUp className="rounded-md w-6 h-6 bg-[#FFFFFF1A] text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrediction((p) => Math.max(0, p - 1))}
                  >
                    <FiChevronDown className="rounded-md w-6 h-6 bg-[#FFFFFF1A] text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-2">
              <label className="flex gap-2 items-center font-Manrope font-semibold text-xl text-white">
                Duration <BsInfoCircle className="text-[#868686]" />
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={`${duration} Minutes`}
                  readOnly
                  className="w-full bg-transparent border border-[#FFFFFF33] rounded-[10px] p-5 font-Manrope font-semibold text-xl text-[#FFFFFF80]"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => setDuration((d) => d + 5)}
                  >
                    <FiChevronUp className="rounded-md w-6 h-6 bg-[#FFFFFF1A] text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDuration((d) => Math.max(5, d - 5))}
                  >
                    <FiChevronDown className="rounded-md w-6 h-6 bg-[#FFFFFF1A] text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <label className="flex items-center gap-2 font-Manrope font-medium text-base text-white  cursor-pointer">
            <input
              type="checkbox"
              checked={participate}
              onChange={(e) => setParticipate(e.target.checked)}
              className="w-7 h-7 border border-[#F7CA15] rounded-md accent-[#F7CA15]/70"
            />
            I Want To Participate In My Own Prediction
          </label>

          {/* if checkbox is checked then this will be displayed */}
          {participate && (
            <>
              <div className="flex flex-col gap-2">
                <label className="font-Manrope font-semibold text-xl text-white">
                  Select Your Vote
                </label>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setVote("for")}
                    className={`flex-1 flex items-center justify-between px-5 py-3 rounded-[10px] font-Manrope font-extrabold text-xl bg-[#02BA4530] ${
                      vote === "for"
                        ? "bg-[#02BA45] text-white"
                        : "text-[#02BA4580]"
                    }`}
                  >
                    For <MdOutlineKeyboardDoubleArrowUp className="text-4xl" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setVote("against")}
                    className={`flex-1 flex items-center justify-between px-5 py-3 rounded-[10px] font-Manrope font-extrabold text-xl bg-[#CF37391A] ${
                      vote === "against"
                        ? "bg-[#CF3739] text-white"
                        : "text-[#CF373980]"
                    }`}
                  >
                    Against{" "}
                    <MdOutlineKeyboardDoubleArrowDown className="text-4xl" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                {/* stake */}
                <div className="flex flex-col gap-2">
                  <label className="flex justify-between items-center font-Manrope font-semibold text-xl text-white">
                    Stake With <span className="text-[#53AE94]">253 USDT</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={0}
                      placeholder="0.00 USDT"
                      value={stake}
                      onChange={(e) => setStake(e.target.value)}
                      className="w-full bg-transparent border border-[#FFFFFF33] rounded-[10px] p-5 font-Manrope font-semibold text-xl text-[#FFFFFF80] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 ">
                      <Image src={StakeLogo} alt="duel logo" />
                    </div>
                  </div>
                </div>

                {/* Duel */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center justify-end font-Manrope font-bold text-base text-[#F7CA15]">
                    1443 DUEL
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={0}
                      placeholder="0.00 DUEL"
                      value={duelAmount}
                      onChange={(e) => setDuelAmount(e.target.value)}
                      className="w-full bg-transparent border border-[#FFFFFF33] rounded-[10px] p-5 font-Manrope font-semibold text-xl text-[#FFFFFF80] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 ">
                      <Image src={DuelLogo} alt="duel logo" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            type="submit"
            disabled={!formValid}
            className={`mt-2 w-full py-3 rounded-[10px] font-Manrope font-bold text-xl ${
              formValid
                ? "bg-[#F7CA15] text-black cursor-pointer"
                : "bg-[#373737] text-[#868686] cursor-not-allowed"
            }`}
          >
            Create Duel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
