import React from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { Container } from "@mui/material";


const Videos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

// add title/description and link to video

  return (
    <div className="centerVid">
      <div className="videoPageContainer">
        <Container maxWidth="md" justify="center">
          <div className="playerWrapper">
            <ReactPlayer
              controls={true}
              className="player"
              url="https://www.youtube.com/watch?v=_ZCKU4SellU"
              width="80vw"
              height="86vh"
              playing={false}
              muted={true}
            />
          </div>
        </Container>
      </div>
      <div className="videoPageContainer">
        <Container maxWidth="md" justify="center">
          <div className="playerWrapper">
            <ReactPlayer
              controls={true}
              className="player"
              url="https://www.youtube.com/watch?v=AzyR4biyb5s"
              width="80vw"
              height="86vh"
              playing={false}
              muted={true}
            />
          </div>
        </Container>
      </div>
      <div className="videoPageContainer">
        <Container maxWidth="md" justify="center">
          <div className="playerWrapper">
            <ReactPlayer
              controls={true}
              className="player"
              url="https://www.youtube.com/watch?v=ews67bQn1w8"
              width="80vw"
              height="86vh"
              playing={false}
              muted={true}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Videos;
