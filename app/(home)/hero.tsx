"use client";

import FaqModal from "@/src/components/modals/faq-modal";
import React, { useState, useEffect } from "react";
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

// node positions: top → right → bottom → left
const NODE_ANGLES = [-90, 0, 90, 180];

const Hero = () => {
  const [openFaqModal, setOpenModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [size, setSize] = useState(300); // default for mobile

  // Adjust size based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSize(300); // mobile
      else if (width < 768) setSize(320); // sm
      else if (width < 1024) setSize(480); // md
      else setSize(562); // lg+
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const RADIUS = size / 2 - 20;
  const CENTER = size / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  /** Click anywhere to go to next step */
  const handleScreenClick = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <div className="bg-HeroBg bg-cover min-h-screen z-30">
      <div className="container pt-32">
        <div className="flex flex-col">
          {/* Heading */}
          <div className="flex justify-center gap-x-2 md:gap-x-4 font-Sora font-bold text-[40px] md:text-5xl lg:text-[64px]">
            <span className="text-white">How it </span>
            <span className="text-[#F7CA15] block">works</span>
          </div>

          {/* Animation Circle */}
          <div
            className={`relative mx-auto mb-8`}
            style={{ width: `${size}px`, height: `${size}px` }}
          >
            {/* Progress Ring */}
            <svg
              className="absolute inset-0 -rotate-90 w-full h-full"
              viewBox={`0 0 ${size} ${size}`}
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
                  className="absolute w-3 h-3 border-2 md:w-4 md:h-4 md:border-4 border-[#F7CA15] bg-[#161616]"
                  style={{
                    left: x - 6,
                    top: y - 6,
                  }}
                />
              );
            })}

            {/* Circle Content */}
            <div
              className="flex flex-col gap-4 md:gap-20 justify-center items-center text-white absolute inset-0"
              onClick={handleScreenClick}
            >
              <div className="border border-[#363636] rounded-sm font-Nexa font-normal text-sm md:text-base px-1 py-1 md:px-3 md:py-2 overflow-hidden">
                <motion.div
                  key={`step-${activeStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {steps[activeStep].step}
                </motion.div>
              </div>

              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-2 md:gap-3 lg:gap-6 items-center"
              >
                <motion.div
                  key={`img-${activeStep}`}
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={steps[activeStep].img}
                    alt={steps[activeStep].title}
                    priority
                    className="max-w-[60px] sm:max-w-[120px] md:max-w-[200px] lg:max-w-[280px]"
                  />
                </motion.div>

                <div className="font-Nexa font-bold text-xl md:text-2xl lg:text-4xl text-center">
                  {steps[activeStep].title}
                </div>
                <div className="w-48 sm:w-60 md:w-72 lg:w-96 text-center font-AeionMonoSemiLight font-light text-sm md:text-base">
                  {steps[activeStep].desc}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenModal(true);
              }}
              className="flex items-center w-72 sm:w-96 md:w-[620px] py-4  md:py-5 lg::py-7 border-2 border-[#363636] bg-[#161616] text-white"
            >
              <span className="flex-1" />
              <span className="text-center font-Nexa font-bold text-lg md:text-xl lg:text-2xl">
                FAQs
              </span>
              <span className="flex-1 flex justify-end pr-6">
                <FaArrowRight />
              </span>
            </button>

            <button className="flex items-center w-72 sm:w-96 md:w-[620px] py-4 md:py-5 lg::py-7 border-2 border-[#F7CA15] bg-[#F7CA15]/10 text-[#F7CA15]">
              <span className="flex-1" />
              <span className="text-center font-Nexa font-bold text-lg md:text-xl lg:text-2xl">
                How to Participate
              </span>
              <span className="flex-1 flex justify-end pr-6">
                <FaArrowRight />
              </span>
            </button>

            <button className="flex items-center w-72 sm:w-96 md:w-[620px] py-4 md:py-5 lg::py-7 border-2 border-[#F7CA15]/10 bg-[#F7CA15] text-black">
              <span className="flex-1" />
              <span className="font-Nexa font-bold text-lg md:text-xl lg:text-2xl">
                Let's Duel
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
