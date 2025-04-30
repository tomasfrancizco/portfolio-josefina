"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/tbs/TBS-Thumbnail.jpg",
  "2": "/projects/tbs/TBS-color-palette.jpg",
  "3": "/projects/tbs/TBS-typographies.jpg",
  "4": "/projects/tbs/website-mockup-slide.jpg",
  "5": "/projects/tbs/TBS-elements1.jpg",
  "6": "/projects/tbs/TBS-elements2.jpg",
  "7": "/projects/tbs/website-mockup-mobile.jpg",
  "8": "/projects/tbs/website-mockup-mobile-person.jpg",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `TBS project image ${key}`,
}));

const TBSPage = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4">TBS</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                UI Design, Brand Application
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-xl font-medium">TBS Network</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-xl font-medium">2018</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Role</p>
                  <p className="text-xl font-medium">UI Designer</p>
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
                  alt="TBS project overview"
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
                <p>
                  Website design for TBS to reflect their new look and feel, and
                  to integrate new features and functionalities to enhance user
                  engagement.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="pt-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold">
                Graphic Elements:
              </h2>
            </AnimatedElement>
          </section>

          {/* Two Images in a Row */}
          <section>
            <AnimatedElement>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className="relative md:aspect-square w-full cursor-pointer"
                  onClick={() => openCarousel(1)}
                >
                  <Image
                    src={projectImages["2"]}
                    alt="TBS color palette"
                    fill
                    className="object-cover"
                    objectFit="contain"
                  />
                </div>
                <div
                  className="relative md:aspect-square w-full cursor-pointer"
                  onClick={() => openCarousel(2)}
                >
                  <Image
                    src={projectImages["3"]}
                    alt="TBS typographies"
                    fill
                    className="object-cover"
                    objectFit="contain"
                  />
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="pb-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold">
                Identifying the goals of the website redesign:
              </h2>
            </AnimatedElement>
          </section>

          {/* Text with Ordered List */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <ol className="list-decimal pl-5 mb-4">
                  <li className="mb-2">
                    To improve user experience and increase engagement
                  </li>
                  <li className="mb-2">
                    To modernize the website&apos;s look and feel to better
                    represent the brand
                  </li>
                  <li className="mb-2">
                    To increase website traffic and improve SEO performance
                  </li>
                  <li className="mb-2">
                    To integrate new features and functionality to enhance user
                    engagement
                  </li>
                </ol>
              </div>
            </AnimatedElement>
          </section>

          {/* Images */}

          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(3)}
              >
                <Image
                  src={projectImages["4"]}
                  alt="TBS website mockup"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(4)}
              >
                <Image
                  src={projectImages["5"]}
                  alt="TBS design elements"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(5)}
              >
                <Image
                  src={projectImages["6"]}
                  alt="TBS design elements"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(6)}
              >
                <Image
                  src={projectImages["7"]}
                  alt="TBS mobile website mockup"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="py-8">
            <AnimatedElement>
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(7)}
              >
                <Image
                  src={projectImages["8"]}
                  alt="TBS mobile website in use"
                  fill
                  className="object-cover"
                  objectFit="contain"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">Henkel RAQN</h2>
              </div>
              <a
                href="/projects/henkel-raqn"
                className="block relative aspect-video w-full"
              >
                <Image
                  src="/thumbnails/RAQN-Thumbnail.jpg"
                  alt="Henkel RAQN"
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

export default TBSPage;
