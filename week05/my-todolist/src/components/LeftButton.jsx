import React from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

function LeftButton({ onClick }) {
  return (
    <button onClick={onClick} className="left-button">
      <MdOutlineKeyboardDoubleArrowLeft />
    </button>
  );
}

export default LeftButton;
