import React from "react";

const LightBox = ({ folderName, images, currentImage, onClose, onNext, onPrevious }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <div className="relative max-w-screen-xl mx-auto bg-gray-900 p-10">
        <button className="absolute top-0 right-0 p-2 text-white" onClick={onClose}>
          X
        </button>
        <img
          className="object-cover"
          ssrc={`/images/${folderName}/${images[currentImage].name}`}
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
          <button className="text-white" onClick={onPrevious}>
            &larr;
          </button>
          <button className="text-white" onClick={onNext}>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
