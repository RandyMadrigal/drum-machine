import PropTypes from "prop-types";
import { useRef } from "react";

export const DrumPad = ({ text, url }) => {
  const audioRef = useRef(null);

  const handleClick = () => {
    audioRef.current.play();
  };

  const handleOnKeyDown = () => {
    //TODO
  };

  return (
    <div
      className="bg-gray-600 flex justify-center items-center rounded-2xl w-20 h-20 font-bold text-white uppercase shadow-md shadow-slate-950 hover:shadow-orange-400"
      tabIndex="0"
      onClick={handleClick}
    >
      {text} <audio name={text} ref={audioRef} src={url} autoPlay></audio>
    </div>
  );
};

DrumPad.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};
