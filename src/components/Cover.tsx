"use client";
import React from "react";
import Image from "next/image";

export default function Cover() {
  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10">
        <div className="flex flex-col items-start">
          {/* Profile Image */}
          <div className="mb-6 h-20 w-20 overflow-hidden rounded-full md:h-24 md:w-24">
            <Image
              src="/profile-image.jpg" // You'll need to add this image to your public folder
              alt="Josefina Freire Knight"
              width={96}
              height={96}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="mb-4 max-w-5xl text-left text-2xl leading-tight text-gray-900 md:text-3xl lg:text-4xl">
            I'm Josefina Freire Knight, a Senior Visual Designer specializing in
            creating intuitive, user-centered interfaces with a focus on
            usability and accessibility, based in Barcelona, Spain.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-left text-lg leading-relaxed text-gray-700">
            Graphic Designer graduated from the University of Buenos Aires,
            specialized in Visual Design and UX/UI. Experienced in creating
            identity systems, branding, and content for both print and digital
            platforms. Proficient in prototyping, interaction design, and tools
            such as Figma and Adobe Creative Suite. Knowledge of HTML5 and CSS
            for implementing and optimizing digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
