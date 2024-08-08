import { DrumPad } from "./DrumPad";
import { Display } from "./Display";
import { Power } from "./Power";
import { TypeSound } from "./TypeSound";

export const DrumsMachine = () => {
  return (
    <div className=" h-auto w-4/12 p-6 border-black border-4 rounded-2xl">
      <div className="grid grid-flow-col gap-4">
        <div className="grid auto-cols-min grid-cols-3 justify-self-center gap-1">
          <DrumPad text="Q" />
          <DrumPad text="W" />
          <DrumPad text="E" />
          <DrumPad text="A" />
          <DrumPad text="S" />
          <DrumPad text="D" />
          <DrumPad text="Z" />
          <DrumPad text="X" />
          <DrumPad text="C" />
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
