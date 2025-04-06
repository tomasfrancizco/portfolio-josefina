"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const carouselImages = [
  { id: 1, src: "/profile-image.jpg", alt: "Image 1" },
  { id: 2, src: "/profile-image.jpg", alt: "Image 2" },
  { id: 3, src: "/profile-image.jpg", alt: "Image 3" },
  { id: 4, src: "/profile-image.jpg", alt: "Image 4" },
  { id: 5, src: "/profile-image.jpg", alt: "Image 5" },
  { id: 6, src: "/profile-image.jpg", alt: "Image 6" },
  // Duplicate the first few images to create a seamless loop effect
  { id: 7, src: "/profile-image.jpg", alt: "Image 1" },
  { id: 8, src: "/profile-image.jpg", alt: "Image 2" },
  { id: 9, src: "/profile-image.jpg", alt: "Image 3" },
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
  
  return (
    <div className="w-full pt-4 pb-12 md:px-12 lg:px-18 overflow-hidden bg-white rounded-b-4xl">
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden"
      >
        {carouselImages.map((image) => (
          <div 
            key={image.id} 
            className="flex-shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={365}
              height={240}
              className="rounded-lg object-cover max-h-60"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
} 