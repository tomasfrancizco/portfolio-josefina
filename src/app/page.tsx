import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Cover from "@/components/Cover";
import SocialLinks from "@/components/SocialLinks";
import ImageCarousel from "@/components/ImageCarousel";
import SelectedProjects from "@/components/SelectedProjects";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Cover />
        <SocialLinks />
        <ImageCarousel />
        <SelectedProjects />
      </DefaultLayout>
    </>
  );
}
