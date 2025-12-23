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
  // 👉 multiple open FAQs
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="relative w-full max-w-[520px] max-h-[80vh] bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#ffffff1a]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#ffffff1a]">
            <h2 className="text-xl font-semibold text-white">
              Frequently Asked <span className="text-[#F5C400]">Questions</span>
            </h2>

            <button
              onClick={onClose}
              className="text-white/70 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[65vh] px-4 py-4 space-y-3 custom-scroll">
            {faqData.map((faq, index) => {
              const isOpen = openIndexes.includes(index);

              return (
                <div
                  key={index}
                  className="bg-[#2A2A2A] rounded-xl px-4 py-3 cursor-pointer transition-colors hover:bg-[#323232]"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-[#F5C400] font-semibold">
                      Q{index + 1}.
                    </span>
                    <p className="text-white font-medium">{faq.question}</p>
                  </div>

                  {isOpen && (
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqModal;
