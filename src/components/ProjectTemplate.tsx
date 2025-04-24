"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "./AnimatedElement";

// Define more specific types for the content
export type ProjectImageContent = {
  src: string;
  alt?: string;
  caption?: string;
  title?: string;
};

export type ProjectTextContent = {
  title?: string;
  text: string | string[];
};

export type ProjectImageTextContent = {
  title?: string;
  text: string | string[];
  image: {
    src: string;
    alt?: string;
  };
};

export type ProjectGalleryContent = {
  title?: string;
  images: Array<{
    src: string;
    alt?: string;
  }>;
};

export type ProjectVideoContent = {
  title?: string;
  url: string;
};

export type ProjectQuoteContent = {
  text: string;
  author?: string;
};

export type ProjectHeaderContent = {
  title: string;
  description?: string;
};

// Section types to allow for flexible content and layout
export type ProjectSection = {
  type: 
    | "header" 
    | "text" 
    | "image" 
    | "image-text" 
    | "text-image" 
    | "gallery" 
    | "video" 
    | "quote";
  content: 
    | ProjectHeaderContent 
    | ProjectTextContent 
    | ProjectImageContent 
    | ProjectImageTextContent 
    | ProjectGalleryContent 
    | ProjectVideoContent 
    | ProjectQuoteContent;
  layout?: "left" | "right" | "center" | "full";
  background?: "white" | "gray" | "black";
  paddingY?: "small" | "medium" | "large";
}

interface ProjectTemplateProps {
  title: string;
  subtitle?: string;
  client: string;
  year: string;
  role: string;
  team?: string[];
  coverImage: string;
  sections: ProjectSection[];
  nextProject?: {
    title: string;
    path: string;
    image: string;
  };
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  subtitle,
  client,
  year,
  role,
  coverImage,
  sections,
  nextProject,
}) => {
  // Function to render different section types
  const renderSection = (section: ProjectSection, index: number) => {
    const bgClass = section.background === "gray" 
      ? "bg-gray-100" 
      : section.background === "black" 
        ? "bg-black text-white" 
        : "bg-white";
    
    const paddingClass = section.paddingY === "small" 
      ? "py-8" 
      : section.paddingY === "large" 
        ? "py-24" 
        : "py-16";

    const content = <div className={`${bgClass} ${paddingClass}`}>
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <AnimatedElement>
          {section.type === "header" && (
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{(section.content as ProjectHeaderContent).title}</h2>
              {(section.content as ProjectHeaderContent).description && (
                <p className="text-lg md:text-xl max-w-3xl mx-auto">{(section.content as ProjectHeaderContent).description}</p>
              )}
            </div>
          )}

          {section.type === "text" && (
            <div className="max-w-4xl mx-auto">
              {(section.content as ProjectTextContent).title && (
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">{(section.content as ProjectTextContent).title}</h3>
              )}
              <div className="prose prose-lg max-w-none">
                {typeof (section.content as ProjectTextContent).text === "string" ? (
                  <p>{(section.content as ProjectTextContent).text as string}</p>
                ) : (
                  ((section.content as ProjectTextContent).text as string[]).map((paragraph: string, i: number) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))
                )}
              </div>
            </div>
          )}

          {section.type === "image" && (
            <div className="max-w-6xl mx-auto">
              {(section.content as ProjectImageContent).title && (
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                  {(section.content as ProjectImageContent).title}
                </h3>
              )}
              <div className="relative aspect-video">
                <Image
                  src={(section.content as ProjectImageContent).src}
                  alt={(section.content as ProjectImageContent).alt || title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              {(section.content as ProjectImageContent).caption && (
                <p className="text-center text-gray-500 mt-4">{(section.content as ProjectImageContent).caption}</p>
              )}
            </div>
          )}

          {section.type === "image-text" && (
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square">
                  <Image
                    src={(section.content as ProjectImageTextContent).image.src}
                    alt={(section.content as ProjectImageTextContent).image.alt || title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                {(section.content as ProjectImageTextContent).title && (
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6">{(section.content as ProjectImageTextContent).title}</h3>
                )}
                <div className="prose prose-lg">
                  {typeof (section.content as ProjectImageTextContent).text === "string" ? (
                    <p>{(section.content as ProjectImageTextContent).text as string}</p>
                  ) : (
                    ((section.content as ProjectImageTextContent).text as string[]).map((paragraph: string, i: number) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {section.type === "text-image" && (
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                {(section.content as ProjectImageTextContent).title && (
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6">{(section.content as ProjectImageTextContent).title}</h3>
                )}
                <div className="prose prose-lg">
                  {typeof (section.content as ProjectImageTextContent).text === "string" ? (
                    <p>{(section.content as ProjectImageTextContent).text as string}</p>
                  ) : (
                    ((section.content as ProjectImageTextContent).text as string[]).map((paragraph: string, i: number) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square">
                  <Image
                    src={(section.content as ProjectImageTextContent).image.src}
                    alt={(section.content as ProjectImageTextContent).image.alt || title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {section.type === "gallery" && (
            <>
              {(section.content as ProjectGalleryContent).title && (
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                  {(section.content as ProjectGalleryContent).title}
                </h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(section.content as ProjectGalleryContent).images.map((image, i: number) => (
                  <div key={i} className="relative aspect-video">
                    <Image
                      src={image.src}
                      alt={image.alt || `Gallery image ${i + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {section.type === "video" && (
            <div className="max-w-5xl mx-auto">
              {(section.content as ProjectVideoContent).title && (
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                  {(section.content as ProjectVideoContent).title}
                </h3>
              )}
              <div className="relative aspect-video">
                <iframe
                  src={(section.content as ProjectVideoContent).url}
                  title={(section.content as ProjectVideoContent).title || "Project video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          )}

          {section.type === "quote" && (
            <div className="max-w-4xl mx-auto text-center py-8">
              <blockquote className="text-2xl md:text-3xl italic font-light mb-4">
                &ldquo;{(section.content as ProjectQuoteContent).text}&rdquo;
              </blockquote>
              {(section.content as ProjectQuoteContent).author && (
                <cite className="text-lg">— {(section.content as ProjectQuoteContent).author}</cite>
              )}
            </div>
          )}
        </AnimatedElement>
      </div>
    </div>;

    return <section key={index} className={section.type}>{content}</section>;
  };

  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="relative h-[70vh] bg-black">
        <div className="absolute inset-0">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-6 pb-20">
            <AnimatedElement>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
              {subtitle && <p className="text-xl md:text-2xl text-gray-200 mb-8">{subtitle}</p>}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-white">
                <div>
                  <p className="text-gray-300 mb-1">Client</p>
                  <p className="text-xl font-medium">{client}</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Year</p>
                  <p className="text-xl font-medium">{year}</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Role</p>
                  <p className="text-xl font-medium">{role}</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Project sections */}
      {sections.map(renderSection)}

      {/* Next project section */}
      {nextProject && (
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <AnimatedElement>
              <div className="text-center mb-10">
                <p className="text-lg text-gray-600 mb-2">Next Project</p>
                <h2 className="text-3xl md:text-4xl font-bold">{nextProject.title}</h2>
              </div>
              <Link href={nextProject.path} className="block relative aspect-video max-w-5xl mx-auto">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover rounded-lg transition-all duration-300 hover:opacity-90"
                />
              </Link>
            </AnimatedElement>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectTemplate; 