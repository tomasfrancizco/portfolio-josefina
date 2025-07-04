"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/poft/Poft-Thumbnail.jpg",
  "2": "/projects/poft/poft-Logo.jpg",
  "3": "/projects/poft/poft-Palette.jpg",
  "4": "/projects/poft/poft-Emails.jpg",
  "5": "/projects/poft/poft-SM-posts.jpg",
  "6": "/projects/poft/poft-SM-posts-2.jpg",
  "7": "/projects/poft/mockup.jpg",
  "8": "/projects/poft/OneHealth-flyer_Mockup.jpg",
  "9": "/projects/poft/Hardcover-Book-Mockup-Presentation.jpg",
  "10": "/projects/poft/Desk-Calendar-Mockup-1.jpg",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `Protect Our Future Too image ${key}`,
}));

const ProtectOurFutureTooPage = () => {
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
                Protect Our Future Too
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Branding, UI Design, Brand Guidelines
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-sm font-medium">Merck</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-sm font-medium">2019 - 2021</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Role</p>
                  <p className="text-sm font-medium">Branding & UI Designer</p>
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
                  alt="Protect Our Future Too main image"
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
                <p>
                  Protect Our Future Too is an Awareness campaign for
                  veterinarians and pet owners (across 20+ countries) created
                  for MSD Animal Health (Merck) about how warmer and rising
                  temperatures can affect pets, putting human health at risk.
                </p>
              </div>
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
                  alt="Protect Our Future Too logo"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Logo</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  We wanted to make pets the voice of the campaign, so it could
                  help to raise awareness about the impact of rising
                  temperatures and the importance of taking preventive measures
                  to protect them. Pets can serve as a powerful symbol of the
                  need to protect our future and take action to prevent the
                  spread of zoonotic diseases.
                </p>
                <p>
                  By including the hashtag in the logo, it could increase the
                  likelihood of it being shared across social media channels,
                  and users could easily recognize and associate the hashtag
                  with the campaign.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Third Image */}
          <section className="pt-8 pb-2">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(2)}
              >
                <Image
                  src={projectImages["3"]}
                  alt="Protect Our Future Too color palette"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Fourth Image */}
          <section className="py-2">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(3)}
              >
                <Image
                  src={projectImages["4"]}
                  alt="Protect Our Future Too email campaigns"
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
                  alt="Protect Our Future Too social media posts"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Sixth Image */}
          <section className="py-2">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(5)}
              >
                <Image
                  src={projectImages["6"]}
                  alt="Protect Our Future Too social media campaign"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Group 1: Two images in a row (md+) or column (sm) */}
          <section className="py-2">
            <AnimatedElement>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div
                  className="relative flex justify-center items-center w-full cursor-pointer md:col-span-5"
                  onClick={() => openCarousel(6)}
                >
                  <Image
                    src="/projects/poft/mockup.jpg"
                    alt="Protect Our Future Too mockup"
                    height={500}
                    width={500}
                    className="w-full object-cover md:h-[387px]"
                  />
                </div>
                <div
                  className="relative flex justify-center items-center w-full cursor-pointer md:col-span-7"
                  onClick={() => openCarousel(7)}
                >
                  <Image
                    src="/projects/poft/OneHealth-flyer_Mockup.jpg"
                    alt="One Health flyer mockup"
                    height={500}
                    width={500}
                    className="w-full object-cover md:h-[387px]"
                  />
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* Group 2: Two images in a row (md+) or column (sm) */}
          <section className="pt-2 pb-8">
            <AnimatedElement>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="relative w-full cursor-pointer"
                  onClick={() => openCarousel(8)}
                >
                  <Image
                    src="/projects/poft/Hardcover-Book-Mockup-Presentation.jpg"
                    alt="Hardcover book mockup presentation"
                    height={500}
                    width={500}
                    className="w-full object-cover md:h-[351px]"
                  />
                </div>
                <div
                  className="relative w-full cursor-pointer"
                  onClick={() => openCarousel(9)}
                >
                  <Image
                    src="/projects/poft/Desk-Calendar-Mockup-1.jpg"
                    alt="Desk calendar mockup"
                    height={500}
                    width={500}
                    className="w-full object-cover md:h-[351px]"
                  />
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* Video Link Section */}
          <section className="py-8 max-w-[800px] mx-auto">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Campaign video
                </h2>
                <iframe
                  className="w-full py-8"
                  height="450"
                  src="https://www.youtube.com/embed/LEcgpUKvQBQ?si=YqN6MIQm92qds-XC"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16 max-w-[800px] mx-auto">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  McDonald&apos;s
                </h2>
              </div>
              <a href="/projects/mcdonalds" className="block relative w-full">
                <Image
                  src="/thumbnails/Thumbnail.jpg"
                  alt="McDonald's"
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

export default ProtectOurFutureTooPage;
