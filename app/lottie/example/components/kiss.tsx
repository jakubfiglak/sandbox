"use client";

import Lottie from "lottie-react";
import animation from "./animation.json";

export const Kiss = () => {
  return (
    <div className="w-44">
      <Lottie animationData={animation} loop autoplay />
    </div>
  );
};
