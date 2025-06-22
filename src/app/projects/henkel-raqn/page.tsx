"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/henkel-raqn/RAQN-Thumbnail.jpg",
  "2": "/projects/henkel-raqn/01-RAQN_UI-kit.jpg",
  "3": "/projects/henkel-raqn/02-RAQN_Website_desktop.jpg",
  "4": "/projects/henkel-raqn/03-RAQN_Website_mobile.jpg",
  "5": "/projects/henkel-raqn/04-Button-video.gif",
  "6": "/projects/henkel-raqn/05-RAQN_Colors.jpg",
  "7": "/projects/henkel-raqn/06-RAQN_Typography.jpg",
  "8": "/projects/henkel-raqn/07-RAQN_Buttons.jpg",
  "9": "/projects/henkel-raqn/08-RAQN_Ready-for-Dev.png",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `Henkel RAQN image ${key}`,
}));

const HenkelRAQNPage = () => {
  // State for controlling the carousel
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to open the carousel with a specific image
  const openCarousel = (index: number) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center text-gray-900 pt-[80px] md:pt-[120px]">
        <div className="max-w-[800px] w-full px-4 md:px-6">
          {/* Title Section */}
          <section className="py-16">
            <AnimatedElement>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Henkel RAQN
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                UI Design, Design System, Branding, Art Direction
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-sm font-medium">Henkel</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-sm font-medium">2024</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Role</p>
                  <p className="text-sm font-medium">
                    Lead Designer · Design Systems
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </section>
        </div>

        <div className="max-w-[1000px] w-full px-4 md:px-6">
          {/* First Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(0)}
              >
                <Image
                  src={projectImages["1"]}
                  alt="Henkel RAQN"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8 max-w-[800px] mx-auto">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="">
                  RAQN is Henkel&apos;s internal marketing platform — a
                  centralized space for teams to access tools, tutorials, and
                  resources. When I joined the project, the name and a logo
                  already existed. My job? Turn that into a bold, scalable, and
                  memorable user experience that could serve teams across the
                  company.
                  <br />
                  <br />I led the visual design and design system strategy,
                  working from a minimal starting point (logo + color palette)
                  to a fully functional, accessible, and visually rich
                  interface.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Full-width Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(1)}
              >
                <Image
                  src={projectImages["2"]}
                  alt="Henkel RAQN UI kit"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8 max-w-[800px] mx-auto">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="">
                  To kick things off, I expanded RAQN&apos;s visual language
                  into a full <strong>UI brand system</strong> — defining typography, spacing,
                  gradients, dark mode styles, and a fresh component kit to
                  bring the platform to life.
                  <br />
                  <br />
                  <span className="font-bold">I designed:</span>
                </p>
                <ul className="list-disc list-inside pl-4 mt-4">
                  <li>
                    A flexible <strong>design system in Figma</strong> with token-based styles
                    and responsive layouts
                  </li>
                  <li>
                    An accessible <strong>semantic color system</strong> (including success,
                    warning, and error states)
                  </li>
                  <li>
                    A full suite of <strong>core components</strong> like buttons, cards, modals,
                    and interactive tags
                  </li>
                  <li>
                    Onboarding flows and support pages to help new users get
                    started smoothly
                  </li>
                </ul>
                <p className="mt-4">
                  The interface balances clarity with a sense of play,
                  reflecting the energy of the RAQN name and the creative
                  culture behind it.
                </p>
              </div>
            </AnimatedElement>
          </section>

          <section className="pt-8 pb-2">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(2)}
              >
                <Image
                  src={projectImages["3"]}
                  alt="Henkel RAQN website desktop"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="pt-2 pb-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(3)}
              >
                <Image
                  src={projectImages["4"]}
                  alt="Henkel RAQN website mobile"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="py-8 max-w-[1000px] mx-auto">
            <AnimatedElement>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column - Text */}
                <div className="order-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Microinteractions with Purpose
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      To make key actions more engaging, I added subtle
                      microinteractions to RAQN&apos;s primary button —
                      including a shifting gradient and soft glow on hover.
                      Beyond aesthetics, this interaction proved effective: KPIs
                      showed increased engagement and a higher click-through
                      rate after launch.
                      <br />
                      <br />A small detail with a big impact.
                    </p>
                  </div>
                </div>

                {/* Right Column - Video */}
                <div className="order-2">
                  <div
                    className="w-full cursor-pointer"
                    onClick={() => openCarousel(4)}
                  >
                    <Image
                      src={projectImages["5"]}
                      alt="Henkel RAQN button video"
                      width={1920}
                      height={1080}
                      unoptimized
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </section>

          <section className="pt-8 pb-2">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(5)}
              >
                <Image
                  src={projectImages["6"]}
                  alt="Henkel RAQN colors"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="py-2">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(6)}
              >
                <Image
                  src={projectImages["7"]}
                  alt="Henkel RAQN typography"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="py-2">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(7)}
              >
                <Image
                  src={projectImages["8"]}
                  alt="Henkel RAQN buttons"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="pt-2 pb-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(8)}
              >
                <Image
                  src={projectImages["9"]}
                  alt="Henkel RAQN ready for dev"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8 max-w-[800px] mx-auto">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="">
                  RAQN now has a robust design foundation — one that looks
                  cohesive, adapts across screen sizes, and feels easy and
                  approachable for teams using it every day.
                  <br />
                  <br />
                  This project was a perfect blend of <strong>visual design, design
                  systems thinking, and product storytelling</strong>. It pushed me to
                  think at scale, design with intention, and create a system
                  that doesn&apos;t just look good — it works hard behind the
                  scenes, too.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16 max-w-[800px] mx-auto">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">Bobo Choses</h2>
              </div>
              <a
                href="/projects/bobo-choses"
                className="block relative aspect-video w-full"
              >
                <Image
                  src="/projects/bobo-choses/Thumbnail---Bobo-Choses.jpg"
                  alt="Bobo Choses"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </a>
            </AnimatedElement>
          </section>
        </div>
      </div>

      {/* Fullscreen Image Carousel */}
      {isCarouselOpen && (
        <FullscreenImageCarousel
          images={carouselImages}
          currentIndex={currentImageIndex}
          onClose={() => setIsCarouselOpen(false)}
          setCurrentIndex={setCurrentImageIndex}
        />
      )}
    </DefaultLayout>
  );
};

export default HenkelRAQNPage;
