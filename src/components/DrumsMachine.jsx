import { useState, useEffect } from "react";
import { DrumPad } from "./DrumPad";
import { Display } from "./Display";
import { Power } from "./Power";
import { Footer } from "./Footer";
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
              />
            ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-3">
          <Display />
          <Power />
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
};
