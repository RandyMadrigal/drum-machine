import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { IdContext } from "./Context/IdContext";
import { PowerContext } from "./Context/PowerContext";

export const DrumPad = ({ text, url, id }) => {
  const audioRef = useRef(null);
  const [isPress, setIsPress] = useState(false);
  const { setIdDisplay } = useContext(IdContext);
  const { isOn } = useContext(PowerContext);

  const pressBtnStyle = "shadow-black bg-amber-500 text-black";

  useEffect(() => {
    const handleOnKeyDown = (e) => {
      if (text.toUpperCase() === e.key.toUpperCase()) {
        setIsPress(true);
        setIdDisplay(id);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    };

    const handleOnKeyUp = (e) => {
      if (text.toUpperCase() === e.key.toUpperCase()) {
        setIsPress(false);
      }
    };

    window.addEventListener("keydown", handleOnKeyDown);
    window.addEventListener("keyup", handleOnKeyUp);

    return () => {
      window.removeEventListener("keydown", handleOnKeyDown);
      window.removeEventListener("keyup", handleOnKeyUp);
    };
  }, [id, setIdDisplay, text]);

  const handleClick = () => {
    audioRef.current.currentTime = 0;
    setIdDisplay(id);
    audioRef.current.play();
  };

  return (
    <div
      className={` flex justify-center items-center rounded-2xl w-20 h-20 font-bold text-white uppercase shadow-md  hover:shadow-black hover:bg-amber-500 hover:text-black ${
        isPress ? pressBtnStyle : "bg-gray-600 shadow-slate-950"
      } `}
      onClick={handleClick}
    >
      {text} <audio ref={audioRef} src={url} muted={!isOn}></audio>
    </div>
  );
};

DrumPad.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  id: PropTypes.string,
};
