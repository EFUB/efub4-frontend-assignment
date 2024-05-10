import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function RightButton({ onClick }) {
  return (
    <button onClick={onClick} className="right-button">
      <MdOutlineKeyboardDoubleArrowRight />
    </button>
  );
}

export default RightButton;
