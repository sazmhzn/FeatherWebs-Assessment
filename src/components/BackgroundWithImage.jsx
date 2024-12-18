import React from "react";

const BackgroundWithImage = () => {
  return (
    <div className="relative w-screen h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/clone.png')" }}
      ></div>
    </div>
  );
};

export default BackgroundWithImage;
