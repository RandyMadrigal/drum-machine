import { useState, useEffect } from "react";
import { DrumPad } from "./DrumPad";
import { Display } from "./Display";
import { Power } from "./Power";
import { TypeSound } from "./TypeSound";
import { getData } from "../services/Data";

export const DrumsMachine = () => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setUrl(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-auto min-w-36 w-4/12 p-6 border-black border-4 rounded-2xl">
      <div className="grid grid-flow-col gap-4">
        <div className="grid auto-cols-min grid-cols-3 justify-self-center gap-2">
          {url &&
            url.map((info) => (
              <DrumPad
                key={info.keyTrigger}
                text={info.keyTrigger}
                url={info.url}
              />
            ))}
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
