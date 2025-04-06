"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "./AnimatedElement";

// Sample project data - in a real application, this would likely come from a CMS or API
const projects = [
  {
    id: 1,
    title: "Brand Identity System",
    subtitle: "A comprehensive brand identity for a sustainable fashion company",
    imageSrc: "/profile-image.jpg", // Replace with actual project images
    link: "/projects/brand-identity"
  },
  {
    id: 2,
    title: "E-commerce Redesign",
    subtitle: "UX/UI redesign for an established online marketplace",
    imageSrc: "/profile-image.jpg",
    link: "/projects/ecommerce-redesign"
  },
  {
    id: 3,
    title: "Mobile App Design",
    subtitle: "Intuitive interface for a health and wellness application",
    imageSrc: "/profile-image.jpg",
    link: "/projects/mobile-app"
  },
  {
    id: 4,
    title: "Web Platform",
    subtitle: "Educational platform with focus on accessibility",
    imageSrc: "/profile-image.jpg",
    link: "/projects/web-platform"
  }
];

export default function SelectedProjects() {
  return (
    <section className="w-full py-16">
      <div className="px-4 md:px-12 lg:px-18">
        <AnimatedElement className="mb-4 text-start">
          <h2 className="text-3xl font-medium text-gray-900 md:text-4xl">
            Selected Projects
          </h2>
        </AnimatedElement>
        
        <AnimatedElement className="mb-12 text-start" delay={200}>
          <p className="max-w-2xl text-lg text-gray-700">
            Explore my selected projects, ...
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
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
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