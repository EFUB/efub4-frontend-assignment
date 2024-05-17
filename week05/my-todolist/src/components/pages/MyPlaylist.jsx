import React, { useState } from "react";
import Header from "../../Header";
import PlaylistItem from "../PlaylistItem";
import "../../App.css";
import LeftButton from "../LeftButton";
import RightButton from "../RightButton";

function MyPlaylist() {
  const playlistItems = [
    { videoId: "dXq1JDKudgM", title: "TroyeSivan - for him." },
    //다른 플레이리스트 아이템들 추가하기
    { videoId: "oPOnqlhsMHU", title: "John K - A LOT" },
    { videoId: "fzG623LyoN8", title: "Giveon - Heartbreak Anniversary" },
    { videoId: "f4Y3b7un4LE", title: "Benson Boone - Slow it Down" },
    { videoId: "uOZkWWRO6_Q", title: "Ed Sheeran - Eyes Closed" },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const goToPreviousItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goToNextItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex < playlistItems.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="playBack">
      <div className="myPlaylist">
        <Header title="나의 플레이리스트" />
        <div className="play">
          <LeftButton onClick={goToPreviousItem} className="dirBtn" />
          <PlaylistItem
            videoId={playlistItems[currentItemIndex].videoId}
            title={playlistItems[currentItemIndex].title}
          />
          <RightButton onClick={goToNextItem} className="dirBtn" />
        </div>
      </div>
    </div>
  );
}

export default MyPlaylist;
