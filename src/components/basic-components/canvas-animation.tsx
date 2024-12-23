"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CanvasAnimation: React.FC<any> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Canvas reference
  const airpods = useRef<{ frame: number }>({ frame: 0 }); // GSAP animation state
  const images = useRef<HTMLImageElement[]>([]); // Array to store preloaded images
  const isHovering = useRef<boolean>(false); // To track if hover animation is running
  const isLeaving = useRef<boolean>(false); // To track if leave animation is running

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

    canvas.height = props.height || 510;
    canvas.width = props.width || 540;

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

    let hoverAnimation: gsap.core.Tween | null = null;
    let leaveAnimation: gsap.core.Tween | null = null;

    // Hover logic using GSAP
    const handleMouseEnter = () => {
      if (isLeaving.current) {
        // Wait for the leave animation to complete before starting hover
        leaveAnimation?.eventCallback("onComplete", () => {
          startHoverAnimation();
        });
      } else {
        startHoverAnimation();
      }
    };

    const startHoverAnimation = () => {
      if (hoverAnimation) hoverAnimation.kill(); // Stop any previous hover animation

      isHovering.current = true; // Set hover state
      hoverAnimation = gsap.to(airpods.current, {
        frame: props.frameCount - 1,
        snap: "frame", // Snap to whole frames
        ease: "none",
        duration: props.duration, // Animation duration
        onUpdate: render,
        onComplete: () => {
          isHovering.current = false; // Reset hover state
        },
      });
    };

    const handleMouseLeave = () => {
      if (isHovering.current) {
        // Wait for the hover animation to complete before starting leave
        hoverAnimation?.eventCallback("onComplete", () => {
          startLeaveAnimation();
        });
      } else {
        startLeaveAnimation();
      }
    };

    const startLeaveAnimation = () => {
      if (leaveAnimation) leaveAnimation.kill(); // Stop any previous leave animation

      isLeaving.current = true; // Set leave state
      leaveAnimation = gsap.to(airpods.current, {
        frame: 0,
        snap: "frame",
        ease: "none",
        duration: props.duration, // Animation duration
        onUpdate: render,
        onComplete: () => {
          isLeaving.current = false; // Reset leave state
        },
      });
    };

    const mainContainer = props.containerRef?.current;

    // Add event listeners to the container
    mainContainer?.addEventListener("mouseenter", handleMouseEnter);
    mainContainer?.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      mainContainer?.removeEventListener("mouseenter", handleMouseEnter);
      mainContainer?.removeEventListener("mouseleave", handleMouseLeave);

      if (hoverAnimation) hoverAnimation.kill();
      if (leaveAnimation) leaveAnimation.kill();
    };
  }, []);

  return <canvas ref={canvasRef} className={props.style} />;
};

export default CanvasAnimation;
