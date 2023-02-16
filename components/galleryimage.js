import React, { useState } from "react";

const GalleryImage = ({ folderName, image, onClick}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="relative w-48 h-48 overflow-hidden rounded-lg ">
      <a
        href="#"
        className="w-full h-full"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        <img
          src={`/images/${folderName}/${image.name}`}
          className="object-cover object-center scale-125 w-full h-full"
        />
      </a>
    </div>
  );
};

export default GalleryImage;