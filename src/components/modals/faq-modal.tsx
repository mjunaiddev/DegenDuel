"use client";
import React, { useState } from "react";

interface FaqModalProps {
  onClose: () => void;
}

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
  },
  {
    question: "Sed do eiusmod tempor incididunt ut labore?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    question: "Ut enim ad minim veniam quis nostrud?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
  },
  {
    question: "Sed do eiusmod tempor incididunt ut labore?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    question: "Ut enim ad minim veniam quis nostrud?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
  },
  {
    question: "Sed do eiusmod tempor incididunt ut labore?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    question: "Ut enim ad minim veniam quis nostrud?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const FaqModal: React.FC<FaqModalProps> = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="relative w-full max-w-[715px] max-h-[715px] bg-[#1B1B1B] rounded-xl border-2 border-[#36363699]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-center py-2 px-12 md:py-4">
            <h2 className="font-Sora text-lg md:text-3xl font-semibold text-white text-center">
              Frequently Asked <span className="text-[#F7CA15]">Questions</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 left-3 px-1 md:px-2 border-2 border-[#363636] rounded-sm text-[#363636]/70 hover:text-[#363636] md:text-2xl font-bold"
          >
            ✕
          </button>

          {/* Content */}
          <div className="overflow-y-auto max-h-[65vh] px-4 py-4 space-y-3 custom-scroll">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F8F7F41A] border border-[#363636] rounded-lg px-4 py-3 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-start gap-2">
                  <span className="font-Nexa font-bold text-lg md:text-2xl text-[#F7CA15]">
                    Q{index + 1}.
                  </span>
                  <p className="font-Nexa font-bold text-lg md:text-2xl text-white">
                    {faq.question}
                  </p>{" "}
                </div>
                {activeIndex === index && (
                  <p className="font-Nexa font-normal text-sm md:text-base mt-2 text-[#FFFFFF80] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqModal;
