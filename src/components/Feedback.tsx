"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
// Sample feedback data - you can replace with your actual data
const feedbackData = [
  {
    id: 1,
    image: "/feedback/01_Clara-Oliveira.jpeg",
    name: "Clara Oliveira",
    position: "Content Strategist",
    company: "Keenfolks",
    feedback:
      "Josefina is such a great professional! Not only does she know a lot about design and has loads of experience, but she also has a great attitude! She's always open to feedback and knows how to explain her point of view, which makes the creative process much richer! She is also great at collaborating with others and a joy to work with!",
  },
  {
    id: 2,
    image: "/feedback/02_Bianca-Isaac.jpeg",
    name: "Bianca Isaac",
    position: "Content Manager",
    company: "Keenfolks",
    feedback:
      "I worked closely with Josefina for a year at a digital marketing agency in Barcelona, where she led the design team while I led content. She was not only one of our top designers but also a hands-on, creative partner—constantly supporting her team, aligning on strategy, and pushing fresh ideas across projects like social media assets, landing pages, and interactive tools. Her proactive approach, adaptability, and drive to keep learning made a big impact on our work.",
  },
  {
    id: 3,
    image: "/feedback/03_Tess-Ramsey.jpeg",
    name: "Tess Ramsey",
    position: "Creative Operations",
    company: "Typeform",
    feedback:
      "Working with Jose was always a dream. Her attention to detail, great communication skills, thoughtful design process, openness to feedback and willingness to mentor and give great feedback always stood out to me. She takes great ownership over her work and brings a sense of calm to the sometimes chaotic creative environment.",
  },
  {
    id: 4,
    image: "/feedback/04_Romina-Nigolian.jpeg",
    name: "Romina Nigolian",
    position: "Sr. Client Operations Manager",
    // company: "Pulselive - A Sony Sports Company",
    company: "Pulselive",
    feedback:
      "Trabajar con Josefina fue una experiencia enriquecedora tanto a nivel laboral como personal. Fuimos parte del mismo equipo durante dos años. Es una gran profesional; creativa, responsable y apasionada por su vocación. Sin dudas una excelente compañera de equipo, siempre predispuesta a compartir sus conocimientos y a incorporar nuevas habilidades. No tengo dudas que será una pieza fundamental en sus próximos proyectos.",
  },
  {
    id: 5,
    image: "/feedback/05_Natalia-Torres-Blair.jpeg",
    name: "Natalia Torres Blair",
    position: "UX Product Lead",
    company: "Santander Tecnología",
    feedback:
      "Trabajé con Josefina en Turner, donde formó parte de mi equipo de diseñadores digitales. Siempre mostró compromiso, entendió claramente los objetivos de cada proyecto y aportó ideas innovadoras. Es una persona curiosa y con gran capacidad de adaptación. Recomiendo a Josefina como diseñadora digital para cualquier empresa que busque jóvenes profesionales creativos.",
  },
  {
    id: 6,
    image: "/feedback/06_Romina-Kandrachoff.jpeg",
    name: "Romina Kandrachoff",
    position: "Sr. Software Developer",
    company: "Mercado Libre",
    feedback:
      "Josefina es una persona creativa, profesional y responsable. Tiene buenas ideas y calidad en el diseño, es dedicada en lo que hace buscando una mejora constante. Se mantiene actualizada y siempre esta disponible para enfrentar nuevos desafíos. Es una persona colaboradora, dispuesta a ayudar y transmitir su conocimiento a todo momento. Un gusto trabajar con Josefina.",
  },
  {
    id: 7,
    image: "/feedback/07_Lorena-Lafleur.jpeg",
    name: "Lorena Lafleur",
    position: "Creative Art Manager",
    company: "Sony Pictures Entertainment",
    feedback:
      "Josefina es una excelente profesional. Es una persona muy creativa, con buena predisposición y sentido de la estética. Es flexible, entiende de tiempos y pautas de entrega de los proyectos, sabe trabajar bajo presión o en múltiples tareas y es muy responsable. Sin dudas fue un placer trabajar con ella!!!",
  },
  {
    id: 8,
    image: "/feedback/08_Agustin-Castellani.jpeg",
    name: "Agustín Castellani",
    position: "Creative Director | Co-founder",
    company: "Inhaus Digital",
    feedback:
      "Trabajé con Jose en el equipo digital de Turner los últimos dos años. Es una excelente diseñadora, con miles de ideas, y siempre abierta a compartirlas con el equipo. Fue un placer para mí haber compartido tantos proyectos y desafíos. Excelente profesional y hermosa persona.",
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
        <div className="flex justify-start mb-6">
          <div className="relative w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-full border-2 border-gray-200">
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
          <h3 className="text-xl font-semibold text-gray-900 text-start">
            {feedback.name}
          </h3>
          <p className="text-gray-600 mb-4 text-start">
            {feedback.position} @ {feedback.company}
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
        <div className="w-full bg-gray-100">
          <AnimatedElement className="mb-4 text-start">
            <h2 className="text-3xl font-medium text-gray-900 md:text-4xl">
              Colleagues&apos; Feedback
            </h2>
          </AnimatedElement>
          <AnimatedElement className="mb-12 text-start" delay={200}>
            <p className="max-w-2xl text-lg text-gray-700">
              Read insights and praises from mentors and peers who have guided
              and witnessed my professional growth.
            </p>
          </AnimatedElement>

          <AnimatedElement className="mb-8 text-start px-6">
            <div className="relative">
              {/* Previous button */}
              <button
                onClick={handlePrevious}
                className="absolute -left-7 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 mx-2"
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

              {/* Next button */}
              <button
                onClick={handleNext}
                className="absolute -right-7 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10 mx-2"
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
              {/* Carousel container */}
              <div ref={carouselRef} className="overflow-hidden relative">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * cardWidth
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

          {/* Removing the navigation buttons from here */}
          <div className="flex justify-center mt-8">
            {/* Navigation dots could go here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
