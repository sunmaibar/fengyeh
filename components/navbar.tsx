"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 ">
            <div className="flex justify-between items-center p-4 ">
                {/* Logo + 公司名稱 */}
                <div className="flex items-center space-x-2">
                    <Image src={logo} alt="logo" width={42} />
                    <div className="text-xl font-bold">豐業環保科技</div>
                </div>

                {/* 漢堡按鈕（手機版） */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* 桌機版選單 */}
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:underline">關於我們</a>
                    <a href="#cases" className="hover:underline">成功案例</a>
                    <a href="#more-cases" className="hover:underline">現場案例</a>
                    <a href="#services-contact" className="hover:underline">服務項目</a>
                </div>
            </div>

            {/* ✅ 手機版下拉 + 動畫 + 高度 + 間距 */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out 
        ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col bg-white px-6 py-4 space-y-4">
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:underline text-lg">關於我們</a>
                    <a href="#cases" onClick={() => setIsOpen(false)} className="hover:underline text-lg">成功案例</a>
                    <a href="#more-cases" onClick={() => setIsOpen(false)} className="hover:underline text-lg">現場案例</a>
                    <a href="#services-contact" onClick={() => setIsOpen(false)} className="hover:underline text-lg">服務項目</a>
                </div>
            </div>
        </nav>
    );
}
