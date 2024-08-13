import Typed from "typed.js";
import { useRef, useEffect } from "react";

export const Header = () => {
  const headerText = useRef(null);

  useEffect(() => {
    const typed = new Typed(headerText.current, {
      strings: ["Drum-pad"],
      typeSpeed: 100,
      startDelay: 150,
      backSpeed: 100,
      smartBackspace: false,
      loop: true,
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="text-white text-bold text-5xl" ref={headerText}></span>
    </div>
  );
};
