import SourceContent from "../../landing-page/hero/source-content";
import GradientSection from "./gradient";

export type HeroSection = {
  buttonText: string;
  additionalDescription: string | null;
  gradientText: string;
  URL: string;
  "contact-us": boolean;
  image: boolean;
  fallback:string;
  gradientTextStyle: string;
  aboutPage: string;
  style: {
    gradientDivStyle: string;
    sourceStyle: string;
  };
};

const Hero: React.FC<HeroSection> = (props) => (
  <div className="w-full relative">
    <GradientSection {...props} />
    {props.URL && (
      <SourceContent
        showContent={props?.image ? "image" : "video"}
        source={props.URL}
        fallback={props.fallback}
        style={props.style}
      />
    )}
  </div>
);

export default Hero;
