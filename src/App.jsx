import { DrumsMachine } from "./components/DrumsMachine";
import { useState } from "react";
import { IdContext } from "./components/Context/IdContext";
import { PowerContext } from "./components/Context/PowerContext";
import { TypeSoundContext } from "./components/Context/TypeSoundContext";

function App() {
  const [IdDisplay, setIdDisplay] = useState("-");
  const [isOn, setIsOn] = useState(true);
  const [selectSound, setSelectSound] = useState("DRUMS");

  return (
    <div className="flex flex-col justify-center items-center mx-auto h-screen bg-gradient-to-r from-slate-800 to-slate-700">
      <TypeSoundContext.Provider value={{ selectSound, setSelectSound }}>
        <PowerContext.Provider value={{ isOn, setIsOn }}>
          <IdContext.Provider value={{ IdDisplay, setIdDisplay }}>
            <DrumsMachine />
          </IdContext.Provider>
        </PowerContext.Provider>
      </TypeSoundContext.Provider>
    </div>
  );
}

export default App;
