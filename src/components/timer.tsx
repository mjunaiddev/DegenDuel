"use client";

import React from "react";
import { useTimer } from "react-timer-hook";

type TimerProps = {
  expiryTimestamp: Date;
};

interface TimerProps2 {
  duration: number;
}

const MyTimer = ({ expiryTimestamp }: TimerProps) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  // Format numbers to always show 2 digits
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center space-x-4 max-[420px]:space-x-4 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {formatNumber(days).split('').map((digit, index) => (
            <div key={index} className="bg-[#FFFFFF0F] rounded-[4px] w-[26px] h-[35px] flex items-center justify-center">
              <span className="text-white font-semibold text-2xl">{digit}</span>
            </div>
          ))}
        </div>
        <span className="text-white font-medium text-[10px] uppercase">DAYS</span>
      </div>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {formatNumber(hours).split('').map((digit, index) => (
            <div key={index} className="bg-[#FFFFFF0F] rounded-[4px] w-[26px] h-[35px] flex items-center justify-center">
              <span className="text-white font-semibold text-2xl">{digit}</span>
            </div>
          ))}
        </div>
        <span className="text-white font-medium text-[10px] uppercase">HOURS</span>
      </div>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {formatNumber(minutes).split('').map((digit, index) => (
            <div key={index} className="bg-[#FFFFFF0F] rounded-[4px] w-[26px] h-[35px] flex items-center justify-center">
              <span className="text-white font-semibold text-2xl">{digit}</span>
            </div>
          ))}
        </div>
        <span className="text-white font-medium text-[10px] uppercase">MINUTES</span>
      </div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {formatNumber(seconds).split('').map((digit, index) => (
            <div key={index} className="bg-[#FFFFFF0F] rounded-[4px] w-[26px] h-[35px] flex items-center justify-center">
              <span className="text-white font-semibold text-2xl">{digit}</span>
            </div>
          ))}
        </div>
        <span className="text-white font-medium text-[10px] uppercase">SECONDS</span>
      </div>
    </div>
  );
};

export default function Timer({ duration }: TimerProps2) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + duration);
console.log("duraton",duration)
  return (
    <div className="flex items-center justify-center ">
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}