import React from "react";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-button">
      {isVisible && (
        <button
          type="button"
          className="btn btn-primary  btn-floating  btn-lg btn-back-to-top"
          onClick={scrollUp}
        >
          <i class="fas fa-angle-up angle-icon"></i>
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
