import { useState, useEffect } from "react";
import { DrumPad } from "./DrumPad";
import { Display } from "./Display";
import { Power } from "./Power";
import { TypeSound } from "./TypeSound";
import { getData } from "../services/Data";

export const DrumsMachine = () => {
  const [key, setKey] = useState(null);
  const [url, setUrl] = useState(null);

  const handleClick = (e) => {
    setKey(e.target.name);
  };

  const handleKeyPress = (e) => {
    setKey(e.key.toUpperCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();

        const sound = await data.find(
          (keyPress) => keyPress.keyTrigger === key
        );

        if (sound) {
          setUrl(sound.url);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (key !== null) {
      fetchData();
    }
  }, [key]);

  return (
    <div className="h-auto min-w-36 w-4/12 p-6 border-black border-4 rounded-2xl">
      <div className="grid grid-flow-col gap-4">
        <div className="grid auto-cols-min grid-cols-3 justify-self-center gap-2">
          <DrumPad
            text="Q"
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
          <DrumPad
            text="W"
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
          <DrumPad
            text="E"
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
          <DrumPad
            text="A"
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
          <DrumPad
            text="S"
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
          <DrumPad
            text="D"
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
          <DrumPad
            text="Z"
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
          <DrumPad
            text="X"
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
          <DrumPad
            text="C"
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
        </div>
        <div className="flex flex-col justify-around items-center">
          <Display />
          <Power />
          <TypeSound />
        </div>
      </div>
    </div>
  );
};
