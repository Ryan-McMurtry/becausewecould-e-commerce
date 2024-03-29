import React from "react";
import ReactPlayer from "react-player";
import "../Styles/styles.scss";
import { Container } from "@mui/material";


const ReactVideoPlayer = () => {
    return (
      <div className="centerVid">
        <div className="videoContainer">
          <Container maxWidth="md" justify="center">
            <div className="playerWrapper">
              <ReactPlayer
                controls={true}
                className="player"
                url="https://www.youtube.com/watch?v=8OlkSUatHsE"
                width="80vw"
                height="86vh"
                playing={true}
                muted={true}
              />
            </div>
          </Container>
        </div>
      </div>
    );
}


export default ReactVideoPlayer;