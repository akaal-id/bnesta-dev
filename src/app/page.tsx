import {
  Navbar,
  Hero,
  SectionIntro,
  Terrace,
  Profile,
  Location,
  SiteFooter,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionIntro />
        <Terrace />
        <Profile />
        <Location />
      </main>
      <SiteFooter />
    </>
  );
}
