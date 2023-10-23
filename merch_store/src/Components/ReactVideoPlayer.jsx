import React from "react";
import {DefaultPlayer as Video} from "react-html5video";
import vid from "../Videos/8RO8-Townies.mp4";
import "../Styles/styles.scss";

const ReactVideoPlayer = () => {
    return (
        <Video className="homeVid">
            <source src={vid} type="video/webm" />
        </Video>
    )
}


export default ReactVideoPlayer;