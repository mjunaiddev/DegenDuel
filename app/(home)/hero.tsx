"use client";

import FaqModal from "@/src/components/modals/faq-modal";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  const [openFaqModal, setOpenModal] = useState(false);
  return (
    <div className="bg-HeroBg min-h-screen">
      <div className="container pt-32">
        <div className="flex flex-col">
          <div className="flex justify-center gap-x-4 font-Sora font-bold text-[64px]">
            <span className="text-white">How it </span>
            <span className="text-[#F7CA15] block">works</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center w-[620px] py-7 border-2 border-[#363636] text-white"
            >
              <span className="flex-1" />
              <span className="text-center font-Nexa font-bold text-2xl">FAQs</span>
              <span className="flex-1 flex justify-end pr-6">
                <FaArrowRight />
              </span>
            </button>
            <button className="flex items-center w-[620px] py-7 border-2 border-[#F7CA15] bg-[#F7CA15]/10 text-[#F7CA15]">
              <span className="flex-1" />
              <span className="text-center font-Nexa font-bold text-2xl">How to Participate</span>
              <span className="flex-1 flex justify-end pr-6">
                <FaArrowRight />
              </span>
            </button>
            <button className="flex items-center w-[620px] py-7 border-2 border-[#F7CA15]/10 bg-[#F7CA15] text-black">
              <span className="flex-1" />
              <span className="text-cente font-Nexa font-bold text-2xl"> Let's Duel</span>
              <span className="flex-1 flex justify-end pr-6">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      {openFaqModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <FaqModal onClose={() => setOpenModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Hero;
