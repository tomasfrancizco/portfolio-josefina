"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/henkel-raqn/RAQN-Thumbnail.jpg",
  "2": "/projects/henkel-raqn/RAQN_Identity-System.jpg",
  "3": "/projects/henkel-raqn/RAQN_Design-System.jpg",
  "4": "/projects/henkel-raqn/RAQN_Icons.jpg",
  "5": "/projects/henkel-raqn/RAQN_Cards.jpg",
  "6": "/projects/henkel-raqn/RAQN_Website.jpg",
  "7": "/projects/henkel-raqn/Channel-Your-Inner-RAQN-1.gif",
  "8": "/projects/henkel-raqn/Keep-it-simple.gif",
  "9": "/projects/henkel-raqn/Lets-talk.gif",
  "10": "/projects/henkel-raqn/Call-RAQN.gif",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `Henkel RAQN image ${key}`
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
      <div className="flex flex-col items-center text-gray-900">
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 ">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-xl font-medium">Henkel</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-xl font-medium">2024</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Role</p>
                  <p className="text-xl font-medium">Lead Designer</p>
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
                  alt="Henkel RAQN"
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
                  Brand identity for RAQN, Henkel&apos;s internal Digital
                  Business Platform. This platform serves as a central hub where
                  employees can access various marketing materials. To create a
                  memorable and engaging brand, we focused on the platform&apos;s
                  name, RAQN, which is also represented by a raccoon mascot.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Full-width Image */}
          <section className="py-8">
            <AnimatedElement>
              <div 
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(1)}
              >
                <Image
                  src={projectImages["2"]}
                  alt="Henkel RAQN branding showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Two Images in Column */}
          <section className="py-8">
            <AnimatedElement>
              <div className="flex flex-col gap-8">
                <div 
                  className="relative aspect-video w-full cursor-pointer"
                  onClick={() => openCarousel(2)}
                >
                  <Image
                    src={projectImages["3"]}
                    alt="Henkel RAQN design"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* Two Images in Row (on medium+) */}
          <section className="py-8">
            <AnimatedElement>
              <div className="flex flex-col md:flex-row gap-6">
                <div 
                  className="w-full md:w-1/2 relative aspect-square cursor-pointer"
                  onClick={() => openCarousel(3)}
                >
                  <Image
                    src={projectImages["4"]}
                    alt="Henkel RAQN design"
                    fill
                    className="object-cover"
                  />
                </div>
                <div 
                  className="w-full md:w-1/2 relative aspect-square cursor-pointer"
                  onClick={() => openCarousel(4)}
                >
                  <Image
                    src={projectImages["5"]}
                    alt="Henkel RAQN design"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* Subtitle 1 */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">UI Design</h2>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">RAQN Website</h2>
                <p>
                  The design guided users through RAQN&apos;s functionalities,
                  highlighting its value and benefits, and reinforcing its
                  importance for Henkel&apos;s marketing team.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Full-width Image */}
          <section className="py-8">
            <AnimatedElement>
              <div 
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => openCarousel(5)}
              >
                <Image
                  src={projectImages["6"]}
                  alt="Henkel RAQN interface showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Subtitle */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Engagement Assets for RAQN
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  To boost engagement with the RAQN platform among Henkel
                  employees, we developed a series of fun and creative assets.
                  This included GIFs for Microsoft Teams, which added a playful
                  element to daily interactions.
                </p>
                <br/>
                <p>
                  We also designed merchandise like stickers featuring witty
                  phrases such as &quot;marketer by day, ninja by night&quot;,
                  along with branded hoodies and water bottles.
                </p>
                <br />
                <p>
                  These items not only promoted the RAQN identity but also
                  fostered a sense of community and pride within the marketing
                  team.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* 4 Images in Grid (2x2 on medium+) */}
          <section className="py-8">
            <AnimatedElement>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="relative aspect-square cursor-pointer"
                  onClick={() => openCarousel(6)}
                >
                  <Image
                    src={projectImages["7"]}
                    alt="Henkel RAQN results"
                    fill
                    className="object-cover"
                  />
                </div>
                <div 
                  className="relative aspect-square cursor-pointer"
                  onClick={() => openCarousel(7)}
                >
                  <Image
                    src={projectImages["8"]}
                    alt="Henkel RAQN results"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div 
                  className="relative aspect-square cursor-pointer"
                  onClick={() => openCarousel(8)}
                >
                  <Image
                    src={projectImages["9"]}
                    alt="Henkel RAQN results"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div 
                  className="relative aspect-square cursor-pointer"
                  onClick={() => openCarousel(9)}
                >
                  <Image
                    src={projectImages["10"]}
                    alt="Henkel RAQN results"
                    fill
                    className="object-cover rounded-lg"
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
                <h2 className="text-3xl md:text-4xl font-bold">Bobo Choses</h2>
              </div>
              <a
                href="/projects/bobo-choses"
                className="block relative aspect-video w-full"
              >
                <Image
                  src="/projects/bobo-choses/Thumbnail---Bobo-Choses.jpg"
                  alt="Bobo Choses"
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

export default HenkelRAQNPage;
