// BlurCircle.jsx
import React from "react";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
        width: "500px",                 // big glow
        height: "250px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at center, rgba(248,113,113,0.2), rgba(15,23,42,0) 50%)",
        filter: "blur(30px)",
        zIndex: 0,                       // behind text/cards
      }}
    />
  );
};

export default BlurCircle;
