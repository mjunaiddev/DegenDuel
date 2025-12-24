"use client";

import FaqModal from "@/src/components/modals/faq-modal";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import WalletImg from "@assets/wallet-img.png";
import PredictionImg from "@assets/prediction-img.png";
import StakeImg from "@assets/stake-img.png";
import RewardImg from "@assets/reward-img.png";
import { motion } from "framer-motion";

const steps = [
  {
    step: "STEP 01",
    title: "Connect Wallet",
    desc: "Connect your Ethereum Wallet to start predicting crypto's next move",
    img: WalletImg,
  },
  {
    step: "STEP 02",
    title: "Make Your Prediction",
    desc: "Pick whether BTC will go up or down within a chosen time frame.",
    img: PredictionImg,
  },
  {
    step: "STEP 03",
    title: "Place Your Stake",
    desc: "Confirm your prediction by staking $DUEL or $USDC tokens.",
    img: StakeImg,
  },
  {
    step: "STEP 04",
    title: "Earn & Withdraw",
    desc: "Win rewards for accurate predictions and instantly withdraw to your wallet.",
    img: RewardImg,
  },
];

const RADIUS = 260;
const CENTER = 281;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// node positions: top → right → bottom → left
const NODE_ANGLES = [-90, 0, 90, 180];

const Hero = () => {
  const [openFaqModal, setOpenModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  /** Click anywhere to go to next step */
  const handleScreenClick = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <div className="bg-HeroBg h-screen">
      <div className="container pt-32">
        <div className="flex flex-col">
          {/* Heading */}
          <div className="flex justify-center gap-x-4 font-Sora font-bold text-[64px]">
            <span className="text-white">How it </span>
            <span className="text-[#F7CA15] block">works</span>
          </div>

          {/* Animation Circle */}
          <div className="relative mx-auto mb-8 w-[562px] h-[562px]">
            {/* Progress Ring */}
            <svg
              className="absolute inset-0 -rotate-90"
              width="562"
              height="562"
            >
              <circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS}
                stroke="#363636"
                strokeWidth="2"
                fill="transparent"
              />
              <motion.circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS}
                stroke="#F7CA15"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray={CIRCUMFERENCE}
                animate={{
                  strokeDashoffset:
                    CIRCUMFERENCE * (1 - (activeStep + 1) / steps.length),
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </svg>

            {/* Clickable Nodes */}
            {NODE_ANGLES.map((angle, index) => {
              const rad = (angle * Math.PI) / 180;
              const x = CENTER + RADIUS * Math.cos(rad);
              const y = CENTER + RADIUS * Math.sin(rad);

              return (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveStep(index);
                  }}
                  className="absolute w-4 h-4 border-4 border-[#F7CA15]"
                  style={{
                    left: x - 6,
                    top: y - 6,
                  }}
                />
              );
            })}

            {/* Circle Content */}
            <div
              className="flex flex-col gap-20 justify-center items-center w-[562px] h-[562px] text-white relative"
              onClick={handleScreenClick}
            >
              <div className="border border-[#363636] rounded-sm font-Nexa font-normal text-base px-3 py-2">
                {steps[activeStep].step}
              </div>

              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6 items-center"
              >
                <Image
                  src={steps[activeStep].img}
                  alt={steps[activeStep].title}
                  priority
                />
                <div className="font-Nexa font-bold text-4xl">
                  {steps[activeStep].title}
                </div>
                <div className="w-96 text-center font-AeionMonoSemiLight font-light text-base">
                  {steps[activeStep].desc}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenModal(true);
              }}
              className="flex items-center w-[620px] py-7 border-2 border-[#363636] bg-[#161616] text-white"
            >
              <span className="flex-1" />
              <span className="text-center font-Nexa font-bold text-2xl">
                FAQs
              </span>
              <span className="flex-1 flex justify-end pr-6">
                <FaArrowRight />
              </span>
            </button>

            <button className="flex items-center w-[620px] py-7 border-2 border-[#F7CA15] bg-[#F7CA15]/10 text-[#F7CA15]">
              <span className="flex-1" />
              <span className="text-center font-Nexa font-bold text-2xl">
                How to Participate
              </span>
              <span className="flex-1 flex justify-end pr-6">
                <FaArrowRight />
              </span>
            </button>

            <button className="flex items-center w-[620px] py-7 border-2 border-[#F7CA15]/10 bg-[#F7CA15] text-black">
              <span className="flex-1" />
              <span className="font-Nexa font-bold text-2xl">
                Let&apos;s Duel
              </span>
              <span className="flex-1 flex justify-end pr-6">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      {openFaqModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <FaqModal onClose={() => setOpenModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Hero;
