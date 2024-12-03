import { transform } from "lodash";
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Breakpoints || media queries
    screens: {
      'xl': '1280px',
      'xxl': '1500px',
      'lg': { max: '1280px' },
      'md': { max: '1024px' },
      'sm': { max: '960px' },
      'xs': { min: '0px', max: '650px' },
      '2xs': { max: '450px' },
      '3xs': { max: '350px' },
    },
    extend: {
      backgroundSize: {
        "slider-bg-size": "200% 200%"
      },
      backgroundImage: {
        blackGradient: "var(--dark-gradient)",
        gradientText: "var(--text-gradient)",
        gradientOnHover: `var(--hover-gradient)`,
        buttonGradient: "var(--dark-button-gradient)",
        sliderGradient: "var(--slider-gradient)",
        gradientBorderCircle: "var(--gradient-circle-border)",
        orangeBackground: "var(--orange-background)"
      },

      colors: {
        primary: 'var(--primary)',
        borderPrimary: 'var(--border-primary)',
        greenDot: 'var(--green-dot)',
        lightBlack: "var(--light-black-gradient)",
        layoutBackground: 'var(--layout-background-color)',
        darkButton: 'var(--dark-button)',
        secondary: 'var(--secondary-color)',
        h3_heading: 'var(--h3-heading)',
        customWhite: 'var(--custom-white)',
        whiteTextPrimary: "var(--light-text-primary)",
        white: "#fff",
        lightText: 'var(--light-text)',
        darkButton_text: 'var(--dark-button-text)',
        dropdown_text: 'var(--dropdown-text)',
        customYellow: 'var(--custom-yellow)',
        viewportBorder: 'var(--view-port-border)',
        innerContainer: 'var(--inner-container)',
        innerBlurContainer: 'var(--inner-container-blur)',
        borderDarkButton: "#ffffff1a",
        shadowOrange: "var(--shadow-orange)",
        sliderCircle: "var(--slider-circle-gradient)",
        darkOrange: "var(--dark-orange)",
        darkOpacity: "var(--dark-with-opacity)",
        customBlue: "var(--custom-blue)",
        whyUsContainerMacOS: "var(--why-us-container-mac-OS)",
        whyUsSmallDeviceContainer: "var(--why-us-container-mac-small-devices)"
      },
      spacing: {},
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      borderRadius: {
        "13xl": "32px",
        "3xs": "10px",
        "6xl-3": "25.3px",
        "11xl": "30px",
        "81xl": "100px",
      },
      boxShadow: {
        buttonInset: "2px 4px 16px 0px var(--custom-dark-shadow) inset",
      },
      maskType: {
        alpha: "alpha"
      },
      keyframes: {
        testimonialSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        rotateBorder: {
          "0%": {
            top: "0px",
            transform: "translate(-50%,-50%)",
            left: "0px",
          },
          "25%": {
            top: "0px",
            left: "100%",
            transform: "translate(-50%,-50%)",
          },
          "50%": {
            top: "100%",
            transform: "translate(-50%,-50%)",
            left: "100%",
          },
          "75%": {
            top: "100%",
            transform: "translate(-50%,-50%)",
            left: "0px",
          },
          "100%": {
            top: "0px",
            transform: "translate(-50%,-50%)",
            left: "0px",
          }
        },
        rotate: {
          "0%": {
            transform: "rotate(140deg)"
          },
          "100%": {
            transform: "rotate(500deg)"
          }
        }

      },

      animation: {
        testimonialSlider: "testimonialSlider 120s infinite linear",
        rotateBorder: "rotateBorder 10s infinite linear ",
        rotate: "rotate 10s infinite linear "
      }
    },
  },
  plugins: [],
};

export default tailwindConfig;