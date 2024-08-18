"use client"
import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const titles = [
  "STRATEGY",
  "BRANDING",
  "GRAPHIC DESIGN",
  "WEB DESIGN",
  "WEB DEVELOPMENT",
];

const descriptions = [
  "All our websites start with defining your business and presenting a strategy to increase traffic and/or sales. Extensive research into your industry and competition will highlight the most lucrative ways of bringing the right customers to your site.",
  "Branding is much more than just a logo and aesthetics. It’s the foundation of the business image and the way it’s presented to your customers. Good branding is critical in creating a sense of trust, credibility, and authority.",
  "Our Graphic strategy not only drives the tone, messaging, and structure of your website, but it also helps communicate authority and expertise to search engines, arguably the single biggest ranking factor today.",
  "With your guidance, we’ll create high-quality branded copy that is optimized for SEO and engages your target audience. Once we have a content strategy in place, we can then implement the visual design.",
  "We’re confident in our ability to design a website that you’ll love. That’s why we offer unlimited concepts and revisions throughout the design process. We’ll work with you until you’re completely happy with the visuals.",
  "Writing concise code for a bespoke website is critical to loading speed, user experience, search ranking performance, and getting clicks in your online advertising. It’s the foundation of the success of a website that drives sales and marketing. From websites to mobile applications, if you can imagine it, we can build it.",
];

export default function MoreServices() {
  const images = [
    "/strategy.jpg",
    "/branding.jpg",
    "/graphicdesign.jpg",
    "/webdesign.jpg",
    "/webdevelopment.jpg",
  ];

  const [selectedCarousel, setSelectedCarousel] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCarousel(index === selectedCarousel ? null : index);
  };

  return (
    <div className="flex justify-center mt-12 ml-8 mr-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-screen-lg"
      >
        <CarouselContent>
          {images.map((imageUrl, index) => {
            const words = titles[index].split(" ");
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div
                  className={`p-1 bg-cover bg-center filter grayscale relative ${
                    selectedCarousel === index ? "flipped" : ""
                  }`}
                  style={{ backgroundImage: `url(${imageUrl})`, height: "400px" }}
                  onClick={() => handleCardClick(index)}
                >
                  <Card className="h-full">
                    <CardContent className="flex items-center justify-center p-6 h-full w-full relative">
                      <div className="flex flex-col items-center text-white bg-black p-2">
                        {words.map((word, i) => (
                          <span key={i} className="text-2xl font-semibold">
                            {word}
                          </span>
                        ))}
                      </div>
                      {selectedCarousel === index && (
                        <div className="absolute inset-0 flex items-center justify-center p-4 bg-white text-black text-center text-lg">
                        {descriptions[index]}
                      </div>
                       
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
