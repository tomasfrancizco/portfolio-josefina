"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/tnt/TNT-Thumbnail.jpg",
  "2": "/projects/tnt/TNT-Slide-1.jpg",
  "3": "/projects/tnt/TNT-Slide-2.jpg",
  "4": "/projects/tnt/TNT-Slide-3.jpg",
  "5": "/projects/tnt/TNT-Slide-4.jpg",
  "6": "/projects/tnt/TNT-Slide-5.jpg",
  "7": "/projects/tnt/TNT-Slide-6.jpg",
  "8": "/projects/tnt/TNT-Slide-7.jpg",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `TNT image ${key}`,
}));

const TNTPage = () => {
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
      <div className="flex flex-col items-center text-gray-900">
        <div className="max-w-[800px] w-full px-4 md:px-6">
          {/* Title Section */}
          <section className="py-16">
            <AnimatedElement>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">TNT</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Brand Identity, Digital Design, Marketing Campaign
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-xl font-medium">TNT</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-xl font-medium">2022</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Role</p>
                  <p className="text-xl font-medium">Art Director</p>
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
                  alt="TNT main image"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  In charge of creating content for TNT’s Digital Platforms for
                  their regular programming and live events.
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
                  alt="TNT brand identity"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Temporada de Premios
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  First step was adapting the whole Temporada de Premios (Award
                  Season) On-Air identity into the Off-Air one (digital
                  platforms).
                </p>
                <p className="mb-4">
                  Elements that worked on super small scale on huge tv screens
                  needed to be adapted to tiny formats, so making them bigger
                  and legible was crucial.
                </p>
                <p className="mb-4">
                  We generated a whole brand guideline for Digital platforms
                  with all the dos and don’ts. Red was used for cinema and
                  series events, pink for fashion events, and green for music
                  events.
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
                  alt="TNT typography system"
                  fill
                  className="object-cover"
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
                  alt="TNT color palette"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Billboard Music Awards 2017
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  As an Art Director, my role was to create a fresh look and
                  feel to comunicate the Billboard Music Award nominees in the
                  TNT Social Media channels.
                </p>
                <p className="mb-4">
                  Up until then, TNT had a really old school hollywood glamour
                  identity, and because the Billboard Awards’ main audience was
                  young people.. I was asked to move away from those guidelines
                  and come up with a new system that could work well with the
                  tone of the event.
                </p>
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
                  alt="TNT digital design"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Sixth Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(5)}
              >
                <Image
                  src={projectImages["6"]}
                  alt="TNT user interface"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Emmy Awards 2017
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  As an Art Director and Illustrator, I worked on TNT&apos;s
                  Live Event campaign for Social Media and Digital Platforms,
                  presenting the nominees for Best Drama Series.
                </p>
                <p className="mb-4">
                  The idea was to make the audience guess which series were
                  nominated on that category.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Seventh Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(6)}
              >
                <Image
                  src={projectImages["7"]}
                  alt="TNT campaign materials"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Eighth Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(7)}
              >
                <Image
                  src={projectImages["8"]}
                  alt="TNT implementation examples"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">Royal Canin</h2>
              </div>
              <a
                href="/projects/royal-canin"
                className="block relative aspect-video w-full"
              >
                <Image
                  src="/thumbnails/RC_Thumbnail.jpg"
                  alt="Royal Canin"
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

export default TNTPage;
