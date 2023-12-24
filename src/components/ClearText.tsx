import { useClearText } from "../utils/clearText";

interface ClearTextTypes {
  className: string;
}

const ClearText = ({ className }: ClearTextTypes) => {
  const { isClearText, setIsClearText } = useClearText();

  const toggleClearText = () => {
    const newClearText = !isClearText;
    setIsClearText(newClearText);

    if (typeof window !== "undefined") {
      localStorage.setItem("isClearText", newClearText.toString());
    }
  };

  return (
    <>
      <button
        className={className}
        onClick={toggleClearText}
      >
        <i className="fa-regular fa-trash-can-xmark fa-xl" />
      </button>
    </>
  );
};

export default ClearText;
