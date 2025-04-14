"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const carouselImages = [
  { id: 1, src: "/thumbnails/RAQN-Thumbnail.jpg", link: "/projects/henkel-raqn", alt: "raqn" },
  { id: 2, src: "/thumbnails/Thumbnail---Bobo-Choses.jpg", link: "/projects/bobo-choses", alt: "bobo choses" },
  { id: 3, src: "/thumbnails/header_thumbnail.jpg", link: "/projects/tickit-app", alt: "tickit" },
  { id: 4, src: "/thumbnails/Poft-Thumbnail.jpg", link: "/projects/protect-our-future-too", alt: "poft" },
  { id: 5, src: "/thumbnails/Thumbnail.jpg", link: "/projects/mcdonalds", alt: "mcdonalds" },
  { id: 6, src: "/thumbnails/TNT-Thumbnail.jpg", link: "/projects/tnt", alt: "tnt" },
];

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const scrollAmountRef = useRef(0);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollAmountRef.current += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmountRef.current;

      if (scrollAmountRef.current >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) * 0.75) {
        scrollAmountRef.current = 0;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [scrollSpeed]);

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
            onMouseEnter={() => setScrollSpeed(0.3)}
            onMouseLeave={() => setScrollSpeed(1)}
          >
            <Link href={image.link}>
              <Image
                src={image.src}
                alt={image.alt}
                width={365}
                height={240}
                className="rounded-lg object-cover max-h-60 min-h-60"
                priority
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 