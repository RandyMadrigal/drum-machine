import { useContext } from "react";
import { IdContext } from "./Context/IdContext";

export const Display = () => {
  const { IdDisplay } = useContext(IdContext);

  return (
    <section
      id="display"
      className="flex justify-center items-center border-2 border-black bg-white w-full md:w-60 h-10 font-bold my-2"
    >
      {IdDisplay}
    </section>
  );
};
