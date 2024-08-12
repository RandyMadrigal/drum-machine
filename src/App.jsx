import { DrumsMachine } from "./components/DrumsMachine";
import { useState } from "react";
import { IdContext } from "./components/Context/IdContext";

function App() {

  const [IdDisplay, setIdDisplay] = useState("-")

  return (
    

    <div className="flex flex-col justify-center items-center mx-auto h-screen bg-gradient-to-r from-neutral-300 to-stone-400">
      <IdContext.Provider value={{IdDisplay,setIdDisplay}}>
        <DrumsMachine />
      </IdContext.Provider>
    </div>

   

  );
}

export default App;
