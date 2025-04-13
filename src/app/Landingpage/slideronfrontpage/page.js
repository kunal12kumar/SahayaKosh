// in this we put the image of the cruosel

"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Financial Empowerment",
      button: "Explore Component",
      src: "photo/Screenshot 2025-04-12 225656.png",
    },
    {
      title: "Trust-Based Lending",
      button: "Explore Component",
      src: "photo/business.jpg",
    },
    {
      title: "Financial Growth Garden",
      button: "Explore Component",
      src: "photo/6269576.jpg",
    },
    {
      title: "Secure Transfer",
      button: "Explore Component",
      src: "photo/6134225.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      
      <Carousel slides={slideData} />
    </div>
  );
}
