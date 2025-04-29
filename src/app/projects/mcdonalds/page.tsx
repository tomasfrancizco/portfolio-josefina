"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/mcdonalds/Thumbnail.jpg",
  "2": "/projects/mcdonalds/Design-System.jpg",
  "3": "/projects/mcdonalds/UGC---1.jpg",
  "4": "/projects/mcdonalds/UGC---2.jpg",
  "5": "/projects/mcdonalds/UGC---3.jpg",
  "6": "/projects/mcdonalds/Push-Notifications-01.jpg",
  "7": "/projects/mcdonalds/Push-Notifications-02.jpg",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `McDonald's image ${key}`,
}));

const McDonaldsPage = () => {
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
                McDonald&apos;s
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Art Direction
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-xl font-medium">McDonald&apos;s</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-xl font-medium">2024</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
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
                  alt="McDonald's App"
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
              <h2 className="text-3xl md:text-4xl font-bold">
                You Do You: Celebrating McDonald’s Rituals 🥤🍟
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Every McDonald&apos;s fan has a unique way of enjoying their
                  favorite menu items—a quirky ritual, a late-night indulgence,
                  or an unexpected pairing. For the You Do You campaign, we set
                  out to celebrate these one-of-a-kind habits that make
                  McDonald&apos;s part of people&apos;s everyday lives.
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Insight
                </h3>
                <p className="mb-4">
                  McDonald&apos;s isn&apos;t just food; it&apos;s a shared
                  experience, deeply personal yet universally loved. Whether
                  it&apos;s dipping fries in a McFlurry, ordering a Happy Meal
                  at 2 a.m., or making the fries the centerpiece of a table for
                  friends to share, these rituals bring joy and individuality to
                  every visit.
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
                  alt="McDonald's Design System"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Instagram Stories
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  We leaned into an authentic, user-generated content (UGC)
                  aesthetic that feels spontaneous, unfiltered, and true to
                  life.
                </p>
                <p className="mb-4">
                  For the images, instead of polished, studio-shot imagery, we
                  embraced a raw, candid style that feels like it was captured
                  in the moment.
                </p>
                <p className="mb-4">
                  The UGC-inspired visuals weren’t just relatable—they were a
                  call to action. By mirroring the kind of content fans might
                  already share, we invited everyone to join in on the fun by
                  posting their own McDonald’s rituals.
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
                  alt="McDonald's User Generated Content"
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
                  alt="McDonald's App Interface"
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
                  alt="McDonald's App Features"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Push Notifications
              </h2>
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
                    alt="McDonald's Push Notifications Design"
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
                    alt="McDonald's Push Notifications Examples"
                    fill
                    className="object-cover"
                    objectFit="contain"
                  />
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Takeaway</h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  With You Do You, we embraced individuality and transformed
                  quirky food habits into a cultural celebration, reminding
                  everyone that McDonald’s is here for whatever makes them
                  happy. 🍟🍔✨
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">TNT</h2>
              </div>
              <a
                href="/projects/tnt"
                className="block relative aspect-video w-full"
              >
                <Image
                  src="/thumbnails/TNT-Thumbnail.jpg"
                  alt="TNT"
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

export default McDonaldsPage;
