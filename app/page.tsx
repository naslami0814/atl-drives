import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import RouteBuilder from "@/components/RouteBuilder";
import Testimonials from "@/components/Testimonials";
import Coverage from "@/components/Coverage";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Nav />
      <main>
        <Hero />
        <UseCases />
        <HowItWorks />
        <Features />
        <RouteBuilder />
        <Testimonials />
        <Coverage />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
