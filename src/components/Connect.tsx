"use client";
import React from "react";
import Link from "next/link";
import AnimatedElement from "./AnimatedElement";

export default function Connect() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#444]">
      <div className="px-4 md:px-12 lg:px-18 max-w-4xl text-start">
        <AnimatedElement className="mb-4">
          <h2 className="text-3xl font-medium text-white md:text-4xl">
            Interested in connecting?
          </h2>
        </AnimatedElement>

        <AnimatedElement className="mb-8" delay={200}>
          <p className="text-lg text-white max-w-2xl">
            Let&apos;s talk projects, collaborations or anything design!
          </p>
        </AnimatedElement>

        <AnimatedElement delay={400}>
          <Link
            href="mailto:josefreireknight@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#2a2a28] rounded-md hover:bg-white hover:text-[#2a2a28] transition-colors duration-300"
          >
            Email me
          </Link>
        </AnimatedElement>
      </div>
    </section>
  );
}
