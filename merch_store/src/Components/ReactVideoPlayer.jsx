import React from "react";
import ReactPlayer from "react-player";
import "../Styles/styles.scss";
import { Container } from "@mui/material";

const ReactVideoPlayer = () => {
    return (
      <div className="videoContainer">
        <Container maxWidth="md" justify="center">
          <div className="playerWrapper">
            <ReactPlayer
              className="player"
              url="https://www.youtube.com/watch?v=EBcbiS7tfJw&ab_channel=8RO8"
              width="80vw"
              height="85vh"
              playing={true}
              muted={true}
            />
          </div>
        </Container>
      </div>
    );
}


export default ReactVideoPlayer;