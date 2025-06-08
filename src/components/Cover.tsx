"use client";
import React from "react";
import Image from "next/image";
import AnimatedElement from "./AnimatedElement";

export default function Cover() {
  return (
    <div className="w-full bg-white pt-[150px] px-4 md:px-12 lg:px-18">
      <div>
        <div className="flex flex-col items-start">
          {/* Profile Image */}
          <div className="mb-6 h-20 w-20 overflow-hidden rounded-full md:h-24 md:w-24">
            <Image
              src="/profile-image.jpg" // You'll need to add this image to your public folder
              alt="MJFK"
              width={96}
              height={96}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Title with animation */}
          <AnimatedElement className="mb-6 max-w-5xl text-left">
            <h1 className="text-2xl leading-tight text-gray-900 md:text-3xl lg:text-4xl">
              I&apos;m Josefina, a Visual and Product Designer based in Barcelona
            </h1>
          </AnimatedElement>

          {/* Subtitle with animation - delayed slightly */}
          <AnimatedElement className="max-w-5xl text-left" delay={300}>
            <p className="text-lg leading-relaxed text-gray-700">
              I&apos;m a Product Designer with a background in Visual Design and
              7+ years creating digital experiences for global brands. Trained in
              UX/UI through Memorisely&apos;s Bootcamps, with a passion for
              intuitive interfaces, user research, and accessible design.
              Highly skilled in Figma, Adobe Creative Suite, and knowledge on
              HTML/CSS.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}
