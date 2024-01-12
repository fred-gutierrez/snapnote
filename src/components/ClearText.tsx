import { toggleClearText } from "../redux/clearTextSlice";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";

interface ClearTextTypes {
  className: string;
}

const ClearText = ({ className }: ClearTextTypes) => {
  const dispatch: AppDispatch = useDispatch()

  return (
    <>
      <button
        className={className}
        onClick={() => dispatch(toggleClearText())}
      >
        <i className="fa-regular fa-trash-can-xmark fa-xl" />
      </button>
    </>
  );
};

export default ClearText;
