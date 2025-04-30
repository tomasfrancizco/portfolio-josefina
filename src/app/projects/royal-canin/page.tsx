"use client";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { FullscreenImageCarousel } from "@/components/ImageCarousel";

const projectImages = {
  "1": "/projects/royal-canin/RC_Thumbnail.jpg",
  "2": "/projects/royal-canin/RC_Logo.jpg",
  "3": "/projects/royal-canin/RC_01.jpg",
  "4": "/projects/royal-canin/RC_02.jpg",
  "5": "/projects/royal-canin/RC_03.jpg",
  "6": "/projects/royal-canin/RC_04.jpg",
};

// Convert project images to an array format for the carousel
const carouselImages = Object.entries(projectImages).map(([key, src]) => ({
  src,
  alt: `Royal Canin image ${key}`,
}));

const RoyalCaninPage = () => {
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
                Royal Canin
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Branding, Storytelling, Art Direction
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Client</p>
                  <p className="text-xl font-medium">Royal Canin</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Year</p>
                  <p className="text-xl font-medium">2024</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-500 mb-1">Role</p>
                  <p className="text-xl font-medium">Art Director & Designer</p>
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
                  alt="Royal Canin App Showcase"
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
                  Love at First Sight is an emotive campaign for Royal Canin,
                  focusing on the transformative first moments between net pet
                  parents and their pets, emphasizing the brand&apos;s
                  commitment to nurturing these bonds from the beginning of
                  life.
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
                  alt="Royal Canin Brand Identity"
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
                Love at First Sight - Nurture for Life.
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  The logo &quot;Love at First Sight - Nurture for Life&quot;
                  captures the special bond between pet owners and their pets
                  from day one. With an elegant serif typography with its unique
                  embellishments, the design reflects the deep love and care
                  that grows from that first moment.
                </p>
                <p className="mb-4">
                  It ties into Royal Canin&apos;s mission to support these
                  cherishes connections with lifelong care and nutrition.
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
                  alt="Royal Canin App User Research"
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
                Emotional Content
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-2">
                  Customer Love Stories:
                </h3>
                <p className="mb-4">
                  Featuring &quot;Love at first sight&quot; encounters told from
                  the perspective of the pet owner. These narratives allow for a
                  deeper exploration of each experience.
                </p>
                <p className="mb-4">
                  To connect with our online audience more creatively, we blend
                  various mediums such as video, photography, and graphics -
                  reminiscent of a scrapbook with the premium look and feel of
                  Royal Canin.
                </p>
                <p className="mb-4">
                  Thumbnails will stand out with the emotional and impactful
                  Royal Canin red, accented with subtle doodles, drawing viewers
                  into heartfelt stories and the high-quality aesthetic we aim
                  to convey.
                </p>
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
                  alt="Royal Canin App Wireframes"
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
                Educational Content
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4"></p>
                <h3 className="text-xl font-semibold mb-2">
                  Expert Recommendation:
                </h3>
                <p className="mb-4">
                  Featuring insights from trusted veterinarians and experts,
                  delivering science-backed content for pet care. To reflect
                  professionalism, the design of vet recommendations is more
                  subdued while subtly incorporating doodles, aligning with the
                  rest of the campaign.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Pet Owner Tips:
                </h3>
                <p className="mb-4">
                  Showcasing tips from pet owner &quot;influencers&quot; with an
                  authentic, relatable voice. Unlike vet recommendations, these
                  tips have a playful design, using bubble callouts, stickers
                  and doodles to resemble user-generated content, thus boosting
                  engagement.
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
                  alt="Royal Canin App Interface Design"
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
                Educational Content
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Designed with a playful aesthetic, these quizzes aim to
                  captivate pet owners, offering a fun and interactive
                  educational experience on Instagram Stories.
                </p>
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
                  alt="Royal Canin App Mobile Screens"
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
                Educational Content
              </h2>
            </AnimatedElement>
          </section>

          {/* Text Section */}
          <section className="py-8">
            <AnimatedElement>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-2">Facts:</h3>
                <p className="mb-4">
                  Facts section for Instagram Feed offering concise, easily
                  digestible information, providing a valuable resource for pet
                  owners seeking quick insights into puppy and kitten care.
                </p>

                <p className="mb-4">
                  These posts feature a cleaner and more streamlined design,
                  highlighting the scientific expertise of Royal Canin. The
                  clear and simple format enhances readability and understanding
                  for the audience.
                </p>
              </div>
            </AnimatedElement>
          </section>

          {/* Next Project Section */}
          <section className="py-16">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">Tiny Cottons</h2>
              </div>
              <a
                href="/projects/tiny-cottons"
                className="block relative aspect-video w-full"
              >
                <Image
                  src="/thumbnails/Tiny-Thumbnail.jpg"
                  alt="Tiny Cottons"
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

export default RoyalCaninPage;
