"use client";

import DuelCard from "@/src/components/cards/duel-card";
import React, { useState } from "react";
import Bitcoin from "@assets/bitcoin-icon.png";
import Image from "next/image";
import NodataImg from "@assets/nodata-icon.png";
import { DuelCardProps } from "@/src/components/cards/duel-card";
import StatsModal from "@/src/components/modals/stats-modal";
import ParticipateModal from "@/src/components/modals/participate-modal";

type DuelStatus = "active" | "ended" | "finalized";

const Page = () => {
  const [openStatsModal, setOpenStatsModal] = useState(false);
  const [openParticipateModal, setOpenParticipateModal] = useState(false);
  const [activeTab, setActiveTab] = useState<DuelStatus>("active");

  const tabClass = (tab: DuelStatus) =>
    `w-32 py-3 rounded-[10px] font-Manrope font-bold text-base cursor-pointer ${
      activeTab === tab ? "bg-[#F7CA15] text-[#161616]" : "text-[#868686]"
    }`;

  // ✅ All duels in one place
  const duels: DuelCardProps[] = [
    {
      asset: "BTC",
      assetIcon: Bitcoin,
      direction: "up",
      createdPrice: 58600,
      currentPrice: 58910,
      endTime: "2025-01-05T18:30:00Z",
      status: "ended" as DuelStatus,
    },
    {
      asset: "BTC",
      assetIcon: Bitcoin,
      direction: "up",
      createdPrice: 58600,
      currentPrice: 58910,
      endTime: "2025-01-05T18:30:00Z",
      status: "active" as DuelStatus,
    },
    {
      asset: "BTC",
      assetIcon: Bitcoin,
      direction: "up",
      createdPrice: 58600,
      currentPrice: 58910,
      endTime: "2025-01-05T18:30:00Z",
      status: "ended" as DuelStatus,
    },
    {
      asset: "BTC",
      assetIcon: Bitcoin,
      direction: "up",
      createdPrice: 58600,
      currentPrice: 58910,
      endTime: "2025-01-05T18:30:00Z",
      status: "active" as DuelStatus,
    },
    {
      asset: "BTC",
      assetIcon: Bitcoin,
      direction: "up",
      createdPrice: 58600,
      currentPrice: 58910,
      endTime: "2025-01-05T18:30:00Z",
      status: "active" as DuelStatus,
    },
    {
      asset: "BTC",
      assetIcon: Bitcoin,
      direction: "up",
      createdPrice: 58600,
      currentPrice: 58910,
      endTime: "2025-01-05T18:30:00Z",
      status: "active" as DuelStatus,
    },
    {
      asset: "BTC",
      assetIcon: Bitcoin,
      direction: "up",
      createdPrice: 58600,
      currentPrice: 58910,
      endTime: "2025-01-05T18:30:00Z",
      status: "ended" as DuelStatus,
    },
    {
      asset: "BTC",
      assetIcon: Bitcoin,
      direction: "up",
      createdPrice: 58600,
      currentPrice: 58910,
      endTime: "2025-01-05T18:30:00Z",
      status: "active" as DuelStatus,
    },
    {
      asset: "BTC",
      assetIcon: Bitcoin,
      direction: "up",
      createdPrice: 58600,
      currentPrice: 58910,
      endTime: "2025-01-05T18:30:00Z",
      status: "ended" as DuelStatus,
    },
  ];

  // ✅ Filter by tab
  const filteredDuels = duels.filter((duel) => duel.status === activeTab);

  return (
    <div className="bg-HeroBg bg-cover min-h-screen">
      <div className="container py-32">
        {/* Tabs */}
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

        {/* Heading */}
        <h1 className="pb-5 font-Sora font-semibold text-[40px] text-white mt-10">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
          <span className="text-[#F7CA15]">Duels</span>
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {filteredDuels.length > 0 ? (
            filteredDuels.map((duel, index) => (
              <DuelCard
                key={index}
                {...duel}
                onDetail={() => {
                  setOpenStatsModal(true);
                }}
                onParticipate={() => {
                  setOpenParticipateModal(true);
                }}
                onFinalize={() => console.log("Finalize")}
              />
            ))
          ) : (
            <div className="col-span-full  items-center">
              <Image src={NodataImg} alt="nodata image" />
            </div>
          )}
        </div>
      </div>
      {openStatsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <StatsModal onClose={() => setOpenStatsModal(false)} />
        </div>
      )}
      {openParticipateModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <ParticipateModal onClose={() => setOpenParticipateModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Page;
