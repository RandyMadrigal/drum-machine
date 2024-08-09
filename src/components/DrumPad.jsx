import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export const DrumPad = ({ text, handleClick, handleKeyPress }) => {
  const btn = useRef(null);

  useEffect(() => {
    if (btn.current) {
      btn.current.focus();
    }
  }, []);

  return (
    <>
      <button
        ref={btn}
        name={text}
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        className="bg-gray-600 rounded-2xl w-20 h-20 font-bold text-white uppercase shadow-md shadow-slate-950 hover:shadow-orange-400"
      >
        {text}
      </button>
    </>
  );
};

DrumPad.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};
