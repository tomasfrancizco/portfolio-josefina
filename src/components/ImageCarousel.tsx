"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const carouselImages = [
  { id: 1, src: "/thumbnails/RAQN-Thumbnail.jpg", alt: "raqn" },
  { id: 2, src: "/thumbnails/Thumbnail---Bobo-Choses.jpg", alt: "bobo choses" },
  { id: 3, src: "/thumbnails/header_thumbnail.jpg", alt: "tickit" },
  { id: 4, src: "/thumbnails/Poft-Thumbnail.jpg", alt: "poft" },
  { id: 5, src: "/thumbnails/Thumbnail.jpg", alt: "mcdonalds" },
  { id: 6, src: "/thumbnails/TNT-Thumbnail.jpg", alt: "tnt" },
];

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollAmount = 0;
    const scrollSpeed = 1; // Controls the speed of scrolling
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;
      

      if (scrollAmount >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) * 0.75) {
        scrollAmount = 0;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const repeatImages = [...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages];
  
  return (
    <div className="w-full pt-4 pb-12 md:px-12 lg:px-18 overflow-hidden bg-white rounded-b-4xl">
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden"
      >
        {repeatImages.map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={365}
              height={240}
              className="rounded-lg object-cover max-h-60 min-h-60"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
} 