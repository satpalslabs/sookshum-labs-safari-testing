/**
 * This component contains the images.
 */

import dynamic from "next/dynamic";
const Grow = dynamic(() => import("./grow"));
const Develop = dynamic(() => import("./develop"));
const Design = dynamic(() => import("./design"));

const ImageContainer: React.FC<{ imageId: string }> = ({ imageId }) => (
  <div className="w-full  h-full">
    <Images imageId={imageId} />
  </div>
);

export default ImageContainer;

const Images: React.FC<{ imageId: string }> = ({ imageId }) => {
  switch (imageId) {
    case "Design":
      return <Design />;
    case "Develop":
      return <Develop />;
    case "Grow":
      return <Grow />;
  }
};
