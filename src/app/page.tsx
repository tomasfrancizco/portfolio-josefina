import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Cover from "@/components/Cover";
import SocialLinks from "@/components/SocialLinks";
import ImageCarousel from "@/components/ImageCarousel";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Feedback from "@/components/Feedback";
export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Cover />
        <SocialLinks />
        <ImageCarousel />
        <Projects />
        <Feedback />
        <Connect />
      </DefaultLayout>
    </>
  );
}
