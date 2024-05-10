import React from "react";

function Header(props) {
  const title = props.title;
  return <h1 className="header">{title}</h1>;
}

export default React.memo(Header);
