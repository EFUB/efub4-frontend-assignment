import React from "react";
function Header() {
  return <h1 className="header">Todo-List</h1>;
}
console.log("Header컴포넌트 렌더링");
export default React.memo(Header);
