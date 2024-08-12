import { useState, useEffect } from "react";
import { DrumPad } from "./DrumPad";
import { Display } from "./Display";
import { TypeSound } from "./TypeSound";
import { Power } from "./Power";
import { Footer } from "./Footer";
import { getData } from "../services/Data";
import { useContext } from "react";
import { TypeSoundContext } from "./Context/TypeSoundContext";

export const DrumsMachine = () => {
  const [url, setUrl] = useState(null);
  const { selectSound } = useContext(TypeSoundContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(selectSound);
        setUrl(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [selectSound]);

  return (
    <>
      <div className="box-border h-auto min-w-sm md:max-w- p-6 border-black border-2 rounded-3xl bg-zinc-100">
        <div className="grid grid-flow-row md:grid-flow-col gap-3">
          <div className="grid auto-cols-min grid-cols-3 justify-self-center gap-2">
            {url &&
              url.map((info) => (
                <DrumPad
                  key={info.keyTrigger}
                  text={info.keyTrigger}
                  url={info.url}
                  id={info.id}
                />
              ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <Display />
            <TypeSound />
            <Power />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
