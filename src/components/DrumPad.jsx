import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export const DrumPad = ({ text, url }) => {
  const audioRef = useRef(null);
  const [isPress, setIsPress] = useState(false)

  const pressBtnStyle = "shadow-orange-400 bg-emerald-700"

  useEffect(() =>{
    const handleOnKeyDown = (e) => {
      if(text.toUpperCase() ===  e.key.toUpperCase()){
        setIsPress(true)
        audioRef.current.currentTime = 0
        audioRef.current.play()
       
      }
    };
    
    const handleOnKeyUp = (e) =>{
      if(text.toUpperCase() ===  e.key.toUpperCase()){
        setIsPress(false)
      }
    }

    window.addEventListener('keydown', handleOnKeyDown);
    window.addEventListener('keyup', handleOnKeyUp);

    return () =>{
      window.removeEventListener('keydown', handleOnKeyDown);
      window.removeEventListener('keyup', handleOnKeyUp);
    };
  },[])

  const handleClick = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play()
  };

  return (
    <div
      className={` flex justify-center items-center rounded-2xl w-20 h-20 font-bold text-white uppercase shadow-md  hover:shadow-orange-400 hover:bg-emerald-700 ${isPress ? pressBtnStyle : "bg-gray-600 shadow-slate-950"} `} 
      tabIndex="0"
      onClick={handleClick}
      
    >
      {text} <audio ref={audioRef} src={url} ></audio>
    </div>
  );
};

DrumPad.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};
