import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Cover from "@/components/Cover";
import SocialLinks from "@/components/SocialLinks";
import ImageCarousel from "@/components/ImageCarousel";
import SelectedProjects from "@/components/Projects";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Cover />
        <SocialLinks />
        <ImageCarousel />
        <SelectedProjects />
        <Connect />
      </DefaultLayout>
    </>
  );
}
