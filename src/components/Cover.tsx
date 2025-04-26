"use client";
import React from "react";
import Image from "next/image";
import AnimatedElement from "./AnimatedElement";

export default function Cover() {
  return (
    <div className="w-full bg-white pt-12 md:pt-16 px-4 md:px-12 lg:px-18">
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
              I&apos;m Josefina, a Senior Visual Designer based in Barcelona,
              bridging the gap between Branding and Product Design
            </h1>
          </AnimatedElement>

          {/* Subtitle with animation - delayed slightly */}
          <AnimatedElement className="max-w-5xl text-left" delay={300}>
            <p className="text-lg leading-relaxed text-gray-700">
              I&apos;m a Graphic Designer graduated from the University of Buenos Aires,
              specialized in Visual Design and UX/UI. Experienced in creating
              identity systems, branding, and content for both print and digital
              platforms. Proficient in prototyping, interaction design, and
              tools such as Figma and Adobe Creative Suite. Knowledge of HTML5
              and CSS for implementing and optimizing digital experiences.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}
