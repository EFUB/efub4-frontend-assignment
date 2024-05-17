import React from "react";
function Header({ headerText }) {
  return <h1 className="header">{headerText}</h1>;
}
export default React.memo(Header);
