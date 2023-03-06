import React from "react";

const LightBox = ({ url }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <div className="relative max-w-screen-xl mx-auto bg-gray-900 p-10">
        <button
          className="absolute top-0 right-0 p-2 text-white"
          onClick={onClose}
        >
          X
        </button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/D6Ac5JpCHmI?&autoplay=1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default LightBox;
