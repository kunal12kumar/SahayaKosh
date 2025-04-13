// this page will contain the landing page of the main website 
"use client"
import React  from "react"
import { CarouselDemo } from "./slideronfrontpage/page"
import { InfiniteMovingCardsDemo } from "./Review/page"
import { GlobeDemo } from "./globe/page"

export default function Landingpage(){


    return (
        <div className="w-full min-h-screen">
            {/* here we are adding coursel */}
            <div>
                <CarouselDemo></CarouselDemo>
                <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
                <GlobeDemo></GlobeDemo>

            </div>

        </div>
    )
}