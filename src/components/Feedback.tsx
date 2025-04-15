"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
// Sample feedback data - you can replace with your actual data
const feedbackData = [
  {
    id: 1,
    image: "/profile-image.jpg",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp",
    feedback:
      "Working with Josefina was an absolute pleasure. Her attention to detail and creative approach produced results that exceeded our expectations. The project was delivered on time and the quality of work was outstanding.",
  },
  {
    id: 2,
    image: "/profile-image.jpg",
    name: "Michael Chen",
    position: "Product Manager",
    company: "Innovate Inc.",
    feedback:
      "Josefina brought fresh perspectives to our project. Her ability to understand our brand and translate it into compelling visuals was impressive. She was responsive, professional, and delivered excellent work.",
  },
  {
    id: 3,
    image: "/profile-image.jpg",
    name: "Emma Rodriguez",
    position: "Creative Director",
    company: "DesignHub",
    feedback:
      "We hired Josefina for a complete brand redesign, and she knocked it out of the park. Her process was thorough, collaborative, and resulted in a design system that perfectly captured our brand essence.",
  },
  {
    id: 4,
    image: "/profile-image.jpg",
    name: "David Kim",
    position: "CEO",
    company: "StartupX",
    feedback:
      "As a startup founder, I needed someone who could understand my vision and bring it to life visually. Josefina did exactly that and more. Her work has been crucial to our early success and brand recognition.",
  },
  {
    id: 5,
    image: "/profile-image.jpg",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp",
    feedback:
      "Working with Josefina was an absolute pleasure. Her attention to detail and creative approach produced results that exceeded our expectations. The project was delivered on time and the quality of work was outstanding.",
  },
  {
    id: 6,
    image: "/profile-image.jpg",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp",
    feedback:
      "Working with Josefina was an absolute pleasure. Her attention to detail and creative approach produced results that exceeded our expectations. The project was delivered on time and the quality of work was outstanding.",
  },
];

// Define the type for feedback items
interface FeedbackItem {
  id: number;
  image: string;
  name: string;
  position: string;
  company: string;
  feedback: string;
}

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);
  const [cardsPerView, setCardsPerView] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update card width and cards per view based on screen size
  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }

      if (carouselRef.current) {
        const containerWidth = carouselRef.current.clientWidth;
        const gap = 16; // gap-4 = 1rem = 16px
        const newCardWidth =
          (containerWidth - gap * (cardsPerView - 1)) / cardsPerView;
        setCardWidth(newCardWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [cardsPerView]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - cardsPerView : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= feedbackData.length - cardsPerView ? 0 : prevIndex + 1
    );
  };

  const renderFeedbackCard = (feedback: FeedbackItem, index: number) => (
    <div
      key={`${feedback.id}-${index}`}
      className="flex-shrink-0 px-2"
      style={{ width: `${cardWidth}px` }}
    >
      <div className="flex flex-col h-full bg-gray-50 rounded-xl p-6 shadow-sm">
        {/* Profile image */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src={feedback.image}
              alt={feedback.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Feedback content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 text-center">
            {feedback.name}
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            {feedback.position} at {feedback.company}
          </p>
          <blockquote className="text-gray-800 italic flex-1">
            &ldquo;{feedback.feedback}&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-16">
      <div className="px-4 md:px-12 lg:px-18">
        <div className="w-full py-16 bg-gray-100">
          <AnimatedElement className="mb-8 text-start px-6">
            <h2 className="text-3xl font-medium text-gray-900 md:text-4xl">
              Colleagues&quot; Feedback
            </h2>
            <p className="text-gray-600 mb-4 text-start">
              Read insights and praises from mentors and peers who have guided
              and witnessed my professional growth.
            </p>
          </AnimatedElement>

          <AnimatedElement className="mb-8 text-start px-6">
            <div className="relative">
              {/* Carousel container */}
              <div ref={carouselRef} className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (cardWidth + 8)
                    }px)`,
                  }}
                >
                  {feedbackData.map((feedback, index) =>
                    renderFeedbackCard(feedback, index)
                  )}
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {/* Navigation arrows */}
            <button
              onClick={handlePrevious}
              className="cursor-pointer bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 mx-2"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="cursor-pointer bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 mx-2"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
