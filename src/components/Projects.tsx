"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "./AnimatedElement";

// Sample project data - in a real application, this would likely come from a CMS or API
const projects = [
  {
    id: 1,
    title: "Henkel - RAQN",
    subtitle: "UI Design, Design System, Branding, Art Direction",
    imageSrc: "/thumbnails/RAQN-Thumbnail.jpg",
    link: "/projects/henkel-raqn",
  },
  {
    id: 2,
    title: "Bobo Choses",
    subtitle: "UI Design, Art Direction, Creative Direction",
    imageSrc: "/thumbnails/Thumbnail---Bobo-Choses.jpg",
    link: "/projects/bobo-choses",
  },
  {
    id: 3,
    title: "Tickit App",
    subtitle: "UI Design, Branding, Graphic Design",
    imageSrc: "/thumbnails/header_thumbnail.jpg",
    link: "/projects/tickit-app",
  },
  {
    id: 4,
    title: "Protect Our Future Too",
    subtitle: "Branding, UI Design, Brand Guidelines",
    imageSrc: "/thumbnails/Poft-Thumbnail.jpg",
    link: "/projects/protect-our-future-too",
  },
  {
    id: 5,
    title: "McDonald's",
    subtitle: "Art Direction",
    imageSrc: "/thumbnails/Thumbnail.jpg",
    link: "/projects/mcdonalds",
  },
  {
    id: 6,
    title: "TNT",
    subtitle: "Graphic Design, Art Direction",
    imageSrc: "/thumbnails/TNT-Thumbnail.jpg",
    link: "/projects/tnt",
  },
  {
    id: 7,
    title: "Royal Canin",
    subtitle: "Storytelling, Art Direction, Brand Guidelines",
    imageSrc: "/thumbnails/RC_Thumbnail.jpg",
    link: "/projects/royal-canin",
  },
  {
    id: 8,
    title: "Tiny Cottons",
    subtitle: "Art Direction",
    imageSrc: "/thumbnails/Tiny-Thumbnail.jpg",
    link: "/projects/tiny-cottons",
  },
  {
    id: 9,
    title: "We Are Family",
    subtitle: "UI Design, Art Direction, Illustration, Graphic Design",
    imageSrc: "/thumbnails/CADE-Thumbnail.jpg",
    link: "/projects/we-are-family",
  },
  {
    id: 10,
    title: "TBS",
    subtitle: "UI Design",
    imageSrc: "/thumbnails/TBS-Thumbnail.jpg",
    link: "/projects/tbs",
  },
];

export default function SelectedProjects() {
  return (
    <section className="w-full py-16">
      <div className="px-4 md:px-12 lg:px-18">
        <AnimatedElement className="mb-4 text-start">
          <h2 className="text-3xl font-medium text-gray-900 md:text-4xl">
            Projects
          </h2>
        </AnimatedElement>

        <AnimatedElement className="mb-12 text-start" delay={200}>
          <p className="max-w-2xl text-lg text-gray-700">
            Explore my selected projects, showcasing my dedication to innovative
            and heartfelt design.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedElement
              key={project.id}
              className="group"
              delay={300 + index * 100}
              distance={40}
            >
              <Link href={project.link} className="block overflow-hidden">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105 max-h-100"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium text-gray-900 transition-colors group-hover:text-gray-600">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-base text-gray-700">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
