import { useContext } from "react";
import { PowerContext } from "./Context/PowerContext";

export const Power = () => {
  const { isOn, setIsOn } = useContext(PowerContext);

  const handleClick = () => {
    isOn ? setIsOn(false) : setIsOn(true);
  };

  return (
    <section className="font-bold text-center flex w-full  border-t-4 p-2 md:flex flex-row justify-center items-center gap-5">
      <h4>Power</h4>
      <button
        onClick={handleClick}
        className={`${
          isOn
            ? "bg-red-700 hover:shadow-md hover:shadow-amber-500"
            : "bg-green-700 hover:shadow-md hover:shadow-amber-500"
        }  text-white uppercase p-3 rounded-lg `}
      >
        {isOn ? "Off" : "On"}
      </button>
    </section>
  );
};
