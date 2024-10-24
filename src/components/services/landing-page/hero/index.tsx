
import GradientSection from "./gradient-section";
import SourceContent from "./source-content";
export type contentProps = {
  showContent: string;
  style: {
    gradientDivStyle: string;
    sourceStyle: string;
  };
  fallback:string;
  source: string;
};
const Hero: React.FC = () => (
  <div className="w-full relative shrink-0">
    <GradientSection
      buttonText="Our Services"
      gradientText="We craft custom software solutions that power your business growth"
    />
    <SourceContent
      showContent="video"
      style={{
        gradientDivStyle: "",
        sourceStyle: "",
      }}
      fallback="/services/landing-page/fallback.webp"
      source="/services/landing-page/service.mp4"
    />
  </div>
);

export default Hero;
