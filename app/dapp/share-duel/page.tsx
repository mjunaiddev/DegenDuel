import React from "react";
import DuelCard from "@/src/components/cards/duel-card";
import Bitcoin from "@assets/bitcoin-icon.png";

const page = () => {
  return (
    <div className="bg-HeroBg bg-cover min-h-screen">
      <div className="flex flex-col items-center container py-40 text-center">
        <h1 className="pb-10 font-Sora font-semibold text-2xl md:text-[40px] text-white">
          Shared <span className="text-[#F7CA15]">Duel</span>
        </h1>
        <DuelCard
      asset="BTC"
      assetIcon= {Bitcoin}
      direction= "up"
      createdPrice= {58600}
      currentPrice={58910}
      duration= {4000}
      status="active"
        />
      </div>
    </div>
  );
};

export default page;
