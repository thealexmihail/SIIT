import React from "react";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibilty = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibilty);

    return () => {
      window.removeEventListener("scroll", toggleVisibilty);
    };
  }, []);

  return (
    <div className="scroll-button">
      {isVisible && (
        <button
          type="button"
          className="btn btn-primary  btn-floating  btn-lg btn-back-to-top"
          onClick={scrollUp}
        >
          <i className="fas fa-angle-up angle-icon"></i>
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
