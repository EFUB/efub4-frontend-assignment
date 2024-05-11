import React from "react";
import Header from "../Header";
const VideoPage = () => {
  return (
    <>
      <div className="App">
        <Header headerText="뽀모도로" />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wM3iLRjhsxw?si=68dItS2u4roMLFGh"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoPage;
