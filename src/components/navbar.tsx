import React from "react";
import Image from "next/image";
import Logo from "@assets/logo.png";
import XIcon from "@assets/twitter-icon.png";
import TelegramIcon from "@assets/telegram-icon.png";
import BinanceIcon from "@assets/binance-icon.png";
import NotebookIcon from "@assets/notebook-icon.png";
import EtherscanIcon from "@assets/etherscan-icon.png";

const Navbar = () => {
  return (
    <div className="bg-[#161616] w-full border-[#363636] border-b-2">
      <div className="container flex items-center justify-between h-[100px]">
        <Image src={Logo} alt="Logo" />
        <div className="flex gap-6">
          <div className="flex gap-4">
            {[
              { icon: XIcon, alt: "X icon" },
              { icon: TelegramIcon, alt: "Telegram icon" },
              { icon: EtherscanIcon, alt: "Etherscan icon" },
              { icon: BinanceIcon, alt: "Binance icon" },
              { icon: NotebookIcon, alt: "Notebook icon" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center w-14 h-14 border border-[#363636] bg-[#F8F7F41A] rounded-sm cursor-pointer">
                <Image src={item.icon} alt={item.alt} />
              </div>
            ))}
          </div>
          <button className="px-9 p-3 bg-[#F7CA15] rounded-sm font-Nexa font-bold text-2xl">Launch App</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
