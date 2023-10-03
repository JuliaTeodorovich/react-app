import "./ButtonsTable.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const ButtonPreview = () => {
  return (
    <button className="btn">
      <AiOutlineUser className="logo" />
      <span className="descr">Preview</span>
    </button>
  );
};

const ButtonAdd = () => {
  return (
    <button className="btn">
      <AiOutlinePlus className="logo" />
      <span className="descr">Add product</span>
    </button>
  );
};

export { ButtonPreview, ButtonAdd };
