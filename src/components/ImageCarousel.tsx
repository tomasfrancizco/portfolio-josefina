"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Component for a fullscreen image carousel
export function FullscreenImageCarousel({ 
  images, 
  currentIndex, 
  onClose, 
  setCurrentIndex 
}: { 
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  setCurrentIndex: (index: number) => void;
}) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, images.length, onClose, setCurrentIndex]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Previous button */}
        <button 
          className="absolute left-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Next button */}
        <button 
          className="absolute right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((currentIndex + 1) % images.length);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image */}
        <div className="relative w-[90vw] h-[90vh]">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

// Original ImageCarousel component unmodified
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