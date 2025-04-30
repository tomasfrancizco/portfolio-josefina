"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/bobo-choses/Thumbnail---Bobo-Choses.jpg",
  "2": "/projects/bobo-choses/Bobo-Choses-01.jpg",
  "3": "/projects/bobo-choses/Bobo-Choses-02.jpg",
  "4": "/projects/bobo-choses/Bobo-Choses-03.jpg",
  "5": "/projects/bobo-choses/Bobo-Choses-04.jpg",
  "6": "/projects/bobo-choses/Bobo-Choses-05.jpg",
  "7": "/projects/bobo-choses/Bobo-Choses-06.jpg",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `Bobo Choses image ${key}`,
}));

const BoboChosesPage = () => {
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
                Bobo Choses
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                UI Design, Art Direction, Creative Direction
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-xl font-medium">Bobo Choses</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-xl font-medium">2025</p>
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
                className="w-full cursor-pointer"
                onClick={() => openCarousel(0)}
              >
                <Image
                  src={projectImages["1"]}
                  alt="Bobo Choses"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  For this project, I was challenged to design a Landing Page
                  and a Newsletter (both Desktop and Mobile) for Bobo
                  Choses&apos; campaign Up is Down, building the entire
                  storytelling, wireframes, UI design, and interactive
                  prototype.
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
                  alt="Bobo Choses branding showcase"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Two Title and Text blocks in row on md+ */}
          <section className="py-8">
            <AnimatedElement>
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <h2 className="text-2xl font-bold mb-4">
                    Landing Page Concept & Design
                  </h2>
                  <p className="text-gray-700">
                    My goal was to create an engaging, imaginative digital
                    experience that aligns with Bobo Choses’ playful and
                    artistic brand identity.
                    <br />
                    <br />
                    The Landing Page was designed to immerse users in a
                    whimsical world where Up is Down, emphasizing creativity and
                    curiosity.
                  </p>
                </div>
                <div className="w-full">
                  <h2 className="text-2xl font-bold mb-4">
                    Interactive Features & Storytelling
                  </h2>
                  <ul className="text-gray-700">
                    <li>
                      <strong>Opening Curtain Effect:</strong> The first block
                      of the page features an interactive hover effect where a
                      curtain opens, revealing the campaign’s core message.
                    </li>
                    <br />
                    <li>
                      <strong>Hover-Activated Poetry:</strong> As users move
                      their cursor, a poetic message gradually appears,
                      enhancing engagement and reinforcing the storytelling
                      aspect.
                    </li>
                    <br />
                    <li>
                      <strong>Campaign Video Integration:</strong> The
                      experience seamlessly leads to an embedded campaign video,
                      allowing visitors to connect visually with the brand’s
                      message.
                    </li>
                    <br />
                    <li>
                      <strong>Gallery Section:</strong> A visually rich section
                      showcasing campaign imagery, capturing the essence of Up
                      is Down.
                    </li>
                    <br />
                    <li>
                      <strong>Call to Actions & Footer:</strong> The page
                      concludes with clear CTAs encouraging further exploration,
                      followed by a footer incorporating playful elements that
                      tie back to the campaign’s theme.
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Desktop Version
              </h2>
            </AnimatedElement>
          </section>

          {/* Third Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(2)}
              >
                <Image
                  src={projectImages["3"]}
                  alt="Bobo Choses digital experience"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mobile Version
              </h2>
            </AnimatedElement>
          </section>

          {/* Fourth Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(3)}
              >
                <Image
                  src={projectImages["4"]}
                  alt="Bobo Choses product photography"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Interactive LP Prototype
              </h2>
            </AnimatedElement>
          </section>

          <section className="py-8">
            <AnimatedElement>
            
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="100%"
                height="450"
                src="https://embed.figma.com/proto/SmDqEl7G4VkhGXn2GEbQ9o/Josefina-Freire-Knight---Bobo-Choses---Test?page-id=&node-id=1-4193&viewport=123%2C195%2C0.06&scaling=min-zoom&content-scaling=fixed&embed-host=share"
                allowFullScreen
              ></iframe>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Newsletter
              </h2>
            </AnimatedElement>
          </section>

          {/* Fifth Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(4)}
              >
                <Image
                  src={projectImages["5"]}
                  alt="Bobo Choses retail experience"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Two Title and Text blocks in row on md+ */}
          <section className="py-8">
            <AnimatedElement>
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <h2 className="text-2xl font-bold mb-4">
                    Newsletter Concept & Design
                  </h2>
                  <p className="text-gray-700">
                    To complement the Landing Page, I also designed a responsive
                    Newsletter aimed at promoting the Up is Down collection.
                    <br />
                    <br />
                    The goal was to maintain consistency with the
                    campaign&apos;s theme while optimizing the layout for both
                    desktop and mobile users.
                  </p>
                </div>
                <div className="w-full">
                  <h2 className="text-2xl font-bold mb-4">
                    Key Elements of the Newsletter:
                  </h2>
                  <ul className="text-gray-700">
                    <li>
                      <strong>Hero Section with a Strong Visual Hook:</strong>{" "}
                      The newsletter begins with a striking image and a
                      compelling message that introduces the magical world of Up
                      is Down.
                    </li>
                    <br />
                    <li>
                      <strong>Engaging Storytelling:</strong> The copy invites
                      subscribers to explore the new collection, emphasizing the
                      campaign&apos;s theme of imagination and playful
                      possibilities.
                    </li>
                    <br />
                    <li>
                      <strong>Responsive Design:</strong> I ensured the layout
                      adapts seamlessly across desktop and mobile devices,
                      maintaining visual impact and readability.
                    </li>
                    <br />
                    <li>
                      <strong>Product Highlights:</strong> A curated selection
                      of campaign images showcasing the collection, arranged in
                      an engaging and users to explore the collection, making it
                      easy to transition from email to the online store.
                    </li>
                    <br />
                    <li>
                      <strong>Footer with Brand Elements:</strong> Reinforcing
                      Bobo Choses&apos; identity and including relevant links
                      for further engagement.
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Desktop Version
              </h2>
            </AnimatedElement>
          </section>

          {/* Sixth Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(5)}
              >
                <Image
                  src={projectImages["6"]}
                  alt="Bobo Choses packaging design"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mobile Version
              </h2>
            </AnimatedElement>
          </section>

          {/* Sixth Image */}
          <section className="py-8">
            <AnimatedElement>
              <div
                className="w-full cursor-pointer"
                onClick={() => openCarousel(5)}
              >
                <Image
                  src={projectImages["7"]}
                  alt="Bobo Choses packaging design"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedElement>
          </section>

          {/* Title */}
          <section className="py-8">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Outcome & Reflections
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  This project allowed me to push creative boundaries by
                  integrating storytelling with UI/UX design. By blending
                  interactivity, design, and engaging visuals, I successfully
                  translated Up is Down into an immersive digital experience
                  that aligns with Bobo Choses’ playful and artistic vision.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">Tickit App</h2>
              </div>
              <a
                href="/projects/tickit-app"
                className="block relative w-full"
              >
                <Image
                  src="/thumbnails/header_thumbnail.jpg"
                  alt="Tickit App"
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

export default BoboChosesPage;
