"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@assets/logo.png";
import XIcon from "@assets/twitter-icon.png";
import TelegramIcon from "@assets/telegram-icon.png";
import BinanceIcon from "@assets/binance-icon.png";
import NotebookIcon from "@assets/notebook-icon.png";
import EtherscanIcon from "@assets/etherscan-icon.png";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const icons = [
    { icon: XIcon, alt: "X icon" },
    { icon: TelegramIcon, alt: "Telegram icon" },
    { icon: EtherscanIcon, alt: "Etherscan icon" },
    { icon: BinanceIcon, alt: "Binance icon" },
    { icon: NotebookIcon, alt: "Notebook icon" },
  ];

  return (
    <div className="bg-[#161616] w-full px-2 border-b-2 border-[#363636] fixed top-0 z-40]">
      <div className="container mx-auto flex items-center justify-between h-[100px] px-4 lg:px-0">
        {/* Logo */}
        <Link href={"/"} className="flex items-center cursor-pointer">
          <Image src={Logo} alt="Logo" className="w-32 md:w-44 lg:w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4">
            {icons.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 border border-[#363636] bg-[#F8F7F41A] rounded-sm cursor-pointer"
              >
                <Image src={item.icon} alt={item.alt} />
              </div>
            ))}
          </div>
          <Link href={"/dapp"}>
            <button className="px-6 lg:px-9 py-2 md:py-3 bg-[#F7CA15] rounded-sm font-Nexa font-bold text-lg lg:text-2xl">
              Launch App
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX size={30} className="text-[#F7CA15]" />
            ) : (
              <HiMenu size={30} className="text-[#F7CA15]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#161616] border-t-2 border-[#363636] w-full px-4 py-4 flex flex-col gap-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {icons.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-12 h-12 border border-[#363636] bg-[#161616] rounded-sm cursor-pointer"
              >
                <Image src={item.icon} alt={item.alt} />
              </div>
            ))}
          </div>
          <Link href={"/dapp"}>
            <button className="w-[250px] mx-auto py-2 bg-[#F7CA15] rounded-sm font-Nexa font-bold text-xl">
              Launch App
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
