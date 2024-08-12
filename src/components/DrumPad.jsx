import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export const DrumPad = ({ text, url }) => {
  const audioRef = useRef(null);
  const [isPress, setIsPress] = useState(false)

  useEffect(() =>{
    const handleOnKeyDown = (e) => {
      if(text.toUpperCase() ===  e.key.toUpperCase()){
        audioRef.current.currentTime = 0
        audioRef.current.play()
      }
     
    };

    window.addEventListener('keydown', handleOnKeyDown);

    return () =>{
      window.removeEventListener('keydown', handleOnKeyDown);
    };

  },[])

  const handleClick = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play()
  };

  return (
    <div
      className='bg-gray-600 flex justify-center items-center rounded-2xl w-20 h-20 font-bold text-white uppercase shadow-md shadow-slate-950 hover:shadow-orange-400 hover:bg-cyan-700'
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
