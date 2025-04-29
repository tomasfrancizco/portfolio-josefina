"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/tickit-app/header_projectpage.jpg",
  "2": "/projects/tickit-app/Asset-2-100.jpg",
  "3": "/projects/tickit-app/Asset-3-100.jpg",
  "4": "/projects/tickit-app/appflow1.jpg",
  "5": "/projects/tickit-app/appflows2.jpg",
  "6": "/projects/tickit-app/mockup.jpg",
  "7": "/projects/tickit-app/mockup-vet.jpg",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `Tickit App image ${key}`,
}));

const TickitAppPage = () => {
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
                Tickit App
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                UI Design, Mobile App, Branding, Graphic Design
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-xl font-medium">Merck</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-xl font-medium">2019 - 2020</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 mb-1">Role</p>
                  <p className="text-xl font-medium">Branding & UI Designer</p>
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* First Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(0)}
              >
                <Image
                  src={projectImages["1"]}
                  alt="Tickit App header image"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  The aim of Tickit App was to create an easy-to-use and
                  intuitive mobile application that helps veterinarians identify
                  ticks from a photo. This app is intended to make it easier for
                  vets to diagnose tick-related health issues and provide
                  effective treatment for their patients.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Second Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(1)}
              >
                <Image
                  src={projectImages["2"]}
                  alt="Tickit App design overview"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Title and Text */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tickit. Logo
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  First thing was defining the logo for the app. We wanted a
                  minimalistic approach for this identity. The missing dots in
                  the letter &quot;i&quot; of the app&apos;s name represent the
                  missing ticks, which are often hard to spot and identify.
                </p>
                <p className="mt-4">
                  This design element is a subtle but effective way to
                  communicate the app&apos;s purpose and functionality, making
                  it easy for users to understand the app&apos;s purpose and
                  message at a glance. The missing dots in the letter
                  &quot;i&quot; also create a visual intrigue, drawing attention
                  to the app&apos;s name and making it more memorable.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Third Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(2)}
              >
                <Image
                  src={projectImages["3"]}
                  alt="Tickit App user flow"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Fourth Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(3)}
              >
                <Image
                  src={projectImages["4"]}
                  alt="Tickit App wireframes"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Fifth Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(4)}
              >
                <Image
                  src={projectImages["5"]}
                  alt="Tickit App user interface"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Two Images in Row (on medium+) */}
          <section className="py-8">
            <AnimatedElement>
              <div className="flex flex-col md:flex-row gap-6">
                <div
                  className="w-full md:w-1/2 relative aspect-square cursor-pointer"
                  onClick={() => openCarousel(5)}
                >
                  <Image
                    src={projectImages["6"]}
                    alt="Tickit App mobile mockups"
                    fill
                    className="object-cover"
                    objectFit="contain"
                  />
                </div>
                <div
                  className="w-full md:w-1/2 relative aspect-square cursor-pointer"
                  onClick={() => openCarousel(6)}
                >
                  <Image
                    src={projectImages["7"]}
                    alt="Tickit App vet interface"
                    fill
                    className="object-cover"
                    objectFit="contain"
                  />
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Protect Our Future Too
                </h2>
              </div>
              <a
                href="/projects/protect-our-future-too"
                className="block relative aspect-video w-full"
              >
                <Image
                  src="/thumbnails/Poft-Thumbnail.jpg"
                  alt="Protect Our Future Too"
                  fill
                  className="object-cover rounded-lg transition-all duration-300 hover:opacity-90"
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

export default TickitAppPage;
