"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/we-are-family/CADE-Thumbnail.jpg",
  "2": "/projects/we-are-family/Interactive-Tool_Slide.jpg",
  "3": "/projects/we-are-family/SM-Assets_Slide.jpg",
  "4": "/projects/we-are-family/LP_Slide.jpg",
  "5": "/projects/we-are-family/Emails_Slide.jpg",
  "6": "/projects/we-are-family/mockup-LP.jpg",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `We Are Family image ${key}`,
}));

const WeAreFamilyPage = () => {
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
                We Are Family
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                UI Design, Art Direction, Illustration, Graphic Design
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-sm font-medium">Merck</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-sm font-medium">2022 - 2023</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Role</p>
                  <p className="text-sm font-medium">
                    UI Designer & Art Director
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
                  alt="We Are Family campaign overview"
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
                <p className="mb-4">
                  Ongoing campaigns for pet owners on how to care best for your
                  pet. From simple day to day tips, to covering more serious
                  matters such as what to do in case of illnesses or infections.
                </p>
                <p>
                  Each campaign has its own look and feel based on how serious
                  the topic is.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="pt-8 max-w-[800px] mx-auto">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold">
                Cat Pantry Campaign
              </h2>
            </AnimatedElement>
          </section>

          {/* Second Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(1)}
              >
                <Image
                  src={projectImages["2"]}
                  alt="We Are Family interactive tool"
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
                <p className="mb-4">
                  A campaign that consists on bringing awareness on which human
                  foods are okay or a hazard for cats. It&apos;s main asset is
                  an Interactive tool where you can click on elements to see
                  which ones were friendly for your kitty&apos;s menu, and which
                  ones you should avoid completely.
                </p>
                <p>
                  The tool works both on desktop and mobile devices.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Fourth Image */}
          <section className="pt-8 pb-2">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(2)}
              >
                <Image
                  src={projectImages["3"]}
                  alt="We Are Family social media assets"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Third Image */}
          <section className="py-2">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(3)}
              >
                <Image
                  src={projectImages["4"]}
                  alt="We Are Family landing page mockup"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Fifth Image */}
          <section className="py-2">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(4)}
              >
                <Image
                  src={projectImages["5"]}
                  alt="We Are Family email templates"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Sixth Image */}
          <section className="pt-2 pb-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(5)}
              >
                <Image
                  src={projectImages["6"]}
                  alt="We Are Family landing page mockup"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16 max-w-[800px] mx-auto">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">Henkel RQAN</h2>
              </div>
              <a
                href="/projects/henkel-raqn"
                className="block relative w-full"
              >
                <Image
                  src="/thumbnails/RAQN-Thumbnail.jpg"
                  alt="Henkel RQAN"
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

export default WeAreFamilyPage;
