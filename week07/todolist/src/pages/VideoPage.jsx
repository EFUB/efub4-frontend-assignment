import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import "../css/video.css";
import backArrow from "../image/backarrow.png";

const VideoPage = () => {
    const idArray = [
        "lRZdG4jNfdI",
        "skK7nU5yVLg",
        "Xzwv1fRL_Yc",
        "3o8dm8yLrzo",
        "eaSU_fbZZyI",
        "L6zsv9IOK-c",
        "voFW3EUCr2Y",
    ];

    const [videoId, setVideoId] = useState("voFW3EUCr2Y");

    useEffect(() => {
        setVideoId(idArray[Math.floor(Math.random() * idArray.length)]);
    }, []);

    return (
        <>
            <h1>비밀의 방</h1>
            <div className="line1" />
            <YouTube
                className="video"
                videoId={videoId}
                opts={{
                    playerVars: {
                        autoplay: 0,
                        rel: 0,
                        modestbranding: 1,
                    },
                }}
            />
            <Link to="/">
                <img className="back" src={backArrow} />
            </Link>
        </>
    );
};

export default VideoPage;
