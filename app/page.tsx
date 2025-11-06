import Image from "next/image";
import HeroImg from "../public/hero.jpg"
import aboutImg from "../public/about.jpg"
import { success } from "@/util/success";
import MoreCases from "@/components/morecases";

import Autoplay from "embla-carousel-autoplay"

import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image src={HeroImg} alt="豐業環保科技有限公司" priority fill className="object-cover " />
        <div className="absolute inset-0 bg-black opacity-40" ></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">潔淨未來，從此開始</h1>
          <p className="text-lg md:text-2xl">豐業環保科技 – 黑煙淨化器專家</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className=" flex flex-col md:flex-row items-center justify-center p-8">
        <div className="md:w-1/2 w-full h-1/2 md:h-full flex justify-center items-center">
          <Image src={aboutImg} alt="關於我們" className="object-cover h-full w-full rounded-lg shadow" />
        </div>
        <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold mb-4">關於豐業環保科技</h2>
          <p className="text-lg leading-relaxed">我們致力於提供專業的黑煙淨化解決方案，改善空氣品質，守護環境健康。透過創新技術與專業團隊，我們為各產業提供量身打造的環保設備，實現真正的綠色永續。</p>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="cases" className=" p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">成功案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {success.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              <Image src={item.img} alt={`案例${item.name}`} className="object-cover w-full h-64 rounded-lg shadow mb-4" />
              <p className="text-lg font-medium"> {item.name}</p>
            </div>
          ))}
        </div>
      </section>
      {/* more case */}
      {/* <section id="more-cases" className="w-screen mx-auto py-16 "> */}
      <MoreCases />

      <section id="services-contact" className="w-full py-16 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center bg-gray-100">
        <div>
          <h2 className="text-2xl font-bold mb-4">服務項目</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>柴油發電機過濾型黑煙淨化設備</li>
            <li>柴油發電機直通型觸媒轉化器</li>
            <li>現場設備規劃，設計，製作，施工</li>
            <li>柴油濾煙再生觸媒</li>
            <li>柴油引擎廢氣除臭處理設備</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">聯絡資訊</h2>
          <p>負責人：羅文業</p>
          <p>電話：03-4727729</p>
          <p>手機：0922-213-695</p>
          <p>統編：6049-0316</p>
          <p>Email：fengyeh0922213695@outlook.com</p>
          <p>地址：桃園市中壢區青峰路一段47號5樓</p>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">豐業環保科技有限公司</p>
        <p className="text-xs">© 2025 All Rights Reserved</p>
      </footer>
    </div >
  );
}
