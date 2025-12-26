"use client";

import DuelCard from "@/src/components/cards/duel-card";
import React, { useState } from "react";
import Bitcoin from "@assets/bitcoin-icon.png";

const Page = () => {
  const [activeTab, setActiveTab] = useState<"active" | "ended" | "finalized">(
    "active"
  );

  const tabClass = (tab: "active" | "ended" | "finalized") =>
    `w-32 py-3 rounded-[10px] font-Manrope font-bold text-base cursor-pointer ${
      activeTab === tab ? "bg-[#F7CA15] text-[#161616]" : "text-[#868686]"
    }`;

  return (
    <div className="bg-HeroBg bg-cover min-h-screen">
      <div className="container py-32">
        <div className="flex gap-2 justify-between w-[415px] mx-auto border-2 border-[#36363699] rounded-[10px] bg-[#1C1C1C] p-2 text-center">
          <div
            className={tabClass("active")}
            onClick={() => setActiveTab("active")}
          >
            Active
          </div>

          <div
            className={tabClass("ended")}
            onClick={() => setActiveTab("ended")}
          >
            Ended
          </div>

          <div
            className={tabClass("finalized")}
            onClick={() => setActiveTab("finalized")}
          >
            Finalized
          </div>
        </div>
        <h1 className="pb-5 font-Sora font-semibold text-[40px] text-white">
          Active <span className="text-[#F7CA15]"> Duels</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DuelCard
            asset="BTC"
            assetIcon={Bitcoin}
            direction="up"
            createdPrice={58600}
            currentPrice={58910}
            endTime="2025-01-05T18:30:00Z"
            status="active"
            onDetail={() => console.log("Detail")}
            onParticipate={() => console.log("Participate")}
          />
          <DuelCard
            asset="BTC"
            assetIcon={Bitcoin}
            direction="up"
            createdPrice={58600}
            currentPrice={58910}
            endTime="2025-01-05T18:30:00Z"
            status="active"
            onDetail={() => console.log("Detail")}
            onParticipate={() => console.log("Participate")}
          />
          <DuelCard
            asset="BTC"
            assetIcon={Bitcoin}
            direction="up"
            createdPrice={58600}
            currentPrice={58910}
            endTime="2025-01-05T18:30:00Z"
            status="active"
            onDetail={() => console.log("Detail")}
            onParticipate={() => console.log("Participate")}
          />
          <DuelCard
            asset="BTC"
            assetIcon={Bitcoin}
            direction="up"
            createdPrice={58600}
            currentPrice={58910}
            endTime="2025-01-05T18:30:00Z"
            status="active"
            onDetail={() => console.log("Detail")}
            onParticipate={() => console.log("Participate")}
          />
          <DuelCard
            asset="BTC"
            assetIcon={Bitcoin}
            direction="up"
            createdPrice={58600}
            currentPrice={58910}
            endTime="2025-01-05T18:30:00Z"
            status="active"
            onDetail={() => console.log("Detail")}
            onParticipate={() => console.log("Participate")}
          />
          <DuelCard
            asset="BTC"
            assetIcon={Bitcoin}
            direction="up"
            createdPrice={58600}
            currentPrice={58910}
            endTime="2025-01-05T18:30:00Z"
            status="active"
            onDetail={() => console.log("Detail")}
            onParticipate={() => console.log("Participate")}
          />
          <DuelCard
            asset="BTC"
            assetIcon={Bitcoin}
            direction="up"
            createdPrice={58600}
            currentPrice={58910}
            endTime="2025-01-05T18:30:00Z"
            status="active"
            onDetail={() => console.log("Detail")}
            onParticipate={() => console.log("Participate")}
          />
          <DuelCard
            asset="BTC"
            assetIcon={Bitcoin}
            direction="up"
            createdPrice={58600}
            currentPrice={58910}
            endTime="2025-01-05T18:30:00Z"
            status="active"
            onDetail={() => console.log("Detail")}
            onParticipate={() => console.log("Participate")}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
