"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { cases } from "../util/success"

export default function MoreCases() {
 return (
  <section id="more-cases" className="w-screen mx-auto py-16">
   <h2 className="text-3xl font-bold text-center mb-8">現場案例</h2>
   <div className="text-center text-gray-500 text-sm animate-pulse">
    ← 左右滑動查看更多 →
   </div>
   <div className="max-w-5xl mx-auto">
    <Carousel
     opts={{
      loop: true,
      align: "center",
      skipSnaps: false,
     }}
     plugins={[
      Autoplay({
       delay: 3000, // 每3秒滑動一次
       stopOnInteraction: false,
      }),
     ]}
    >
     <CarouselContent>
      {cases.map((item) => (
       <CarouselItem key={item.id} className="p-4 flex justify-center">
        <div className="w-full max-w-sm rounded-2xl shadow-lg overflow-hidden">
         <Image src={item.image} alt={item.title} className="w-full h-64 object-cover" />
         <div className="p-4 text-center font-medium">{item.title}</div>
        </div>
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
    </Carousel>
   </div>
  </section>
 );
}
