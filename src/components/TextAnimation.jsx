import React from "react";
import "./../styles/TextAnimation.css"; // Import your CSS file

const TextAnimation = ({ text, direction }) => {
  return (
    <div>
      <marquee className="Text-animated" behavior="" direction={direction}>
        {text}
      </marquee>
    </div>
  );
};

export default TextAnimation;
