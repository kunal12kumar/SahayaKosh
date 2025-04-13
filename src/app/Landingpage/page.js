// this page will contain the landing page of the main website 
"use client"
import React from "react"
import { CarouselDemo } from "./slideronfrontpage/page"
import { InfiniteMovingCardsDemo } from "./Review/page"
import { GlobeDemo } from "./globe/page"
import { BackgroundLines } from "@/components/ui/background-lines"
import Footer from "./Footer/page";

export default function Landingpage() {


    return (
        <div className="w-full min-h-screen">
            {/* here we are adding coursel */}
            <div>

                <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                    <CarouselDemo></CarouselDemo>

                </BackgroundLines>


               

                <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
                <GlobeDemo></GlobeDemo>
                <Footer></Footer>

            </div>

        </div>
    )
}