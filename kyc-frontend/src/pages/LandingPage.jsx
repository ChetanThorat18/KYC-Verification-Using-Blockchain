import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import UseCases from "../components/UseCases";
import GetStarted from "../components/GetStarted";

function LandingPage() {
  return (
    <div className="bg-[#0F172A]">
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <UseCases />
      <GetStarted />
    </div>
  );
}

export default LandingPage; 