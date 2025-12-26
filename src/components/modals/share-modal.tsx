import React from "react";
import { FaLink } from "react-icons/fa";

const ShareModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="relative w-[640px] border-2 border-[#36363699] rounded-lg bg-[#1C1C1C] p-10 text-white">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 px-1 md:px-2 text-[#737373] hover:text-[#363636] md:text-2xl font-bold"
      >
        ✕
      </button>
      <div className="w-[480px] flex flex-col gap-10 mx-auto">
        <h1 className="font-Sora font-semibold text-[40px] text-center">
          Share <span className="text-[#F7CA15]">Duel</span>
        </h1>
        <div className="border border-[#F7CA15] font-Manrope font-semibold text-xl text-center rounded-[10px] p-5">
          DegenDuel.com{" "}
          <span className="text-[#FFFFFF80]"> /active/320177221 </span>
        </div>
        <div className="flex gap-5">
          <button className="flex-1 border border-[#FFFFFF33] p-4 font-Manrope font-semibold text-base text-center rounded-lg">
            Cancel
          </button>
          <button className="flex-1 flex gap-2 items-center justify-center bg-[#F7CA15] p-4 font-Manrope font-bold text-base text-center rounded-lg text-[#161616]">
          <FaLink /> Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
