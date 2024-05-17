import React from "react";
import Header from "./Header";

const CustomDate = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <div>
      <Header headerText={formattedDate} />
    </div>
  );
};

export default React.memo(CustomDate);
