import { useContext } from "react";
import { TypeSoundContext } from "./Context/TypeSoundContext";

export const TypeSound = () => {
  const { selectSound, setSelectSound } = useContext(TypeSoundContext);

  const handleSelect = (e) => {
    setSelectSound(e.target.value);
  };

  return (
    <section className="font-bold text-center  w-full border-t-4 p-4">
      <select
        className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5   "
        value={selectSound}
        onChange={handleSelect}
      >
        <option value="DRUMS">DRUMS</option>
        <option value="PIANO">PIANO</option>
      </select>
    </section>
  );
};
