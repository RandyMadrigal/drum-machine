import { PropTypes } from "prop-types";

export const DrumPad = ({ text }) => {
  return (
    <>
      <button
        name={text}
        onClick={(e) => {
          console.log(e.target.name);
        }}
        className="bg-gray-600 rounded-2xl w-20 h-20 font-bold text-white uppercase"
      >
        {text}
      </button>
    </>
  );
};

DrumPad.propTypes = {
  text: PropTypes.string.isRequired,
};
