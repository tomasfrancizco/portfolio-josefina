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
  // Since we don't have enough distinct images, reusing some for the grid
  "7": "/projects/poft/poft-Logo.jpg",
  "8": "/projects/poft/poft-Palette.jpg",
  "9": "/projects/poft/poft-Emails.jpg",
  "10": "/projects/poft/poft-SM-posts.jpg",
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
      <div className="flex flex-col items-center text-gray-900">
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-xl font-medium">Merck</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-xl font-medium">2019 - 2021</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
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
                  alt="Protect Our Future Too main image"
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
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(1)}
              >
                <Image
                  src={projectImages["2"]}
                  alt="Protect Our Future Too logo"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Logo</h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  We wanted to make pets the voice of the campaign, so it could
                  help to raise awareness about the impact of rising
                  temperatures and the importance of taking preventive measures
                  to protect them. Pets can serve as a powerful symbol of the
                  need to protect our future and take action to prevent the
                  spread of zoonotic diseases.
                </p>
                <p className="mb-4">
                  By including the hashtag in the logo, it could increase the
                  likelihood of it being shared across social media channels,
                  and users could easily recognize and associate the hashtag
                  with the campaign.
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
                  alt="Protect Our Future Too color palette"
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
                  alt="Protect Our Future Too email campaigns"
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
                  alt="Protect Our Future Too social media posts"
                  fill
                  className="object-cover"
                  objectFit="contain"
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
                  alt="Protect Our Future Too social media campaign"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Video Link Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Campaign video
                </h2>
                <iframe
                  className="w-full my-8"
                  height="450"
                  src="https://www.youtube.com/embed/LEcgpUKvQBQ?si=YqN6MIQm92qds-XC"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  McDonald&apos;s
                </h2>
              </div>
              <a
                href="/projects/mcdonalds"
                className="block relative aspect-video w-full"
              >
                <Image
                  src="/thumbnails/Thumbnail.jpg"
                  alt="McDonald's"
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

export default ProtectOurFutureTooPage;
