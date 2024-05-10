import React from "react";
import "../App.css";

function PlaylistItem({ videoId, title }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="playlist-item">
      <div className="video-container">
        <iframe
          width="500"
          height="350"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-info">
        <h3 className="video-title">{title}</h3>
      </div>
    </div>
  );
}

export default PlaylistItem;
