"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CanvasAnimation: React.FC<any> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Canvas reference
  const airpods = useRef<{ frame: number }>({ frame: 0 }); // GSAP animation state
  const images = useRef<HTMLImageElement[]>([]); // Array to store preloaded images

  // Function to generate the URL for the images
  const currentFrame = (index: number): string =>
    `animation-images${props.url}/${(index + 1).toString().padStart(4, "0")}.${
      props.imageType
    }`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    canvas.height = props.height ? props.height : 510;
    canvas.width = props.width ? props.width : 540;
    // Preload images
    for (let i = 0; i < props.frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current.push(img);
    }

    // Render function
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images.current[airpods.current.frame], 0, 0);
    };

    // Ensure the first frame is loaded and rendered
    images.current[0].onload = render;

    // Hover logic using GSAP
    const handleMouseEnter = () => {
      gsap.to(airpods.current, {
        frame: props.frameCount - 1,
        snap: "frame", // Snap to whole frames
        ease: "none",
        duration: props.duration, // Animation duration
        onUpdate: render,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(airpods.current, {
        frame: 0,
        snap: "frame",
        ease: "none",
        duration: props.duration, // Animation duration
        onUpdate: render,
      });
    };

    const mainContainer = props.containerRef?.current;

    // Add event listeners to the canvas
    mainContainer.addEventListener("mouseenter", handleMouseEnter);
    mainContainer.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      mainContainer.removeEventListener("mouseenter", handleMouseEnter);
      mainContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={props.style} />;
};
export default CanvasAnimation;
