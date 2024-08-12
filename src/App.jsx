import { DrumsMachine } from "./components/DrumsMachine";
import { useState } from "react";
import { IdContext } from "./components/Context/IdContext";
import { PowerContext } from "./components/Context/PowerContext";

function App() {

  const [IdDisplay, setIdDisplay] = useState("-")
  const [isOn, setIsOn] = useState(true)

  return (
    

    <div className="flex flex-col justify-center items-center mx-auto h-screen bg-gradient-to-r from-neutral-300 to-stone-400">
      <PowerContext.Provider value={{isOn, setIsOn}}>
        <IdContext.Provider value={{IdDisplay,setIdDisplay}}>
          <DrumsMachine />
        </IdContext.Provider>
      </PowerContext.Provider>
    </div>

   

  );
}

export default App;
