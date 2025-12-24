import React from "react";

const Dapphero = () => {
  return (
    <div className="bg-HeroBg bg-cover min-h-screen z-30">
      <div className="container pt-80 text-center">
        <h1 className="pb-3 font-Sora font-semibold text-3xl md:text-5xl lg:text-7xl text-white">
          Create or <span className="text-[#F7CA15]">Join Duels</span>
        </h1>
        <p className="font-Sora font-normal text-base text-white">
          On Chain proof of your AWESOMENESS!
        </p>
        <div className="max-w-[365px] mx-auto flex flex-col gap-5 mt-8">
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
            <button className="px-3 py-3 border border-[#F7CA1580] bg-[#F7CA15]/10 rounded-[10px] font-Manrope font-bold text-base text-[#F7CA15]">Join Existing Duels</button>
           <button className="px-8 py-2 md:px-8 md:py-3 bg-[#F7CA15] rounded-[10px] font-Manrope font-bold text-base">Create a Duel</button>
          </div>
          <button className="w-full py-3 border border-[#FFFFFF3B] bg-[#161616] rounded-[10px] font-Manrope font-bold text-base text-white">How to Participate</button>
        </div>
      </div>
    </div>
  );
};

export default Dapphero;
