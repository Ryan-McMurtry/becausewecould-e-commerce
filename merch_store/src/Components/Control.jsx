import React from "react";
import { makeStyles, Slider, withStyles, Button, Tooltip, Popover, Grid } from "@material-ui/core";
import { FastForward, FastRewind, Pause, PlayArrow, SkipNext, VolumeUp} from "@material-ui/icons";


import "../Styles/styles.scss";

const Control = () => {

    const useStyles = makeStyles({
        volumeSlider: {
            width: "100px",
            color: "#FFFFFF"
        },

        bottomIcons: {
            color: "#999",
            padding: "12px 8px",

            "&:hover": {
                color: "#fff",
            }
        }
    });

    const PrettoSlider = withStyles({
        root: {
            height: "20px",
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            aligntItems: "center",
        },
        thumb: {
            height: 20,
            wifht: 20,
            backgroundColor: "#FFFFFF",
            border: "2px solid currentColor",
            marginTop: -3,
            marginLeft: -12,
            "&:focus, &:hover, &$active": {
                boxShadow: "inherit",
            },
        },
        active: {},
        valueLabel: {
            left: "calc (-50% + 4px)",
        },
        track: {
            height: 5,
            borderRadius: 4,
            width: "100%",
        },
        rail: {
            height: 5,
            borderRadius: 4,
        },
    })(Slider);


    return (
      <div className="controlContainer">
        <div className="topContainer"></div>

        <div className="midContainer">
          <div className="iconBtn">
            <FastRewind fontSize="large" />
          </div>

          <div className="iconBtn">
            <Pause fontSize="large" />
          </div>

          <div className="iconBtn">
            <FastForward fontSize="large" />
          </div>
        </div>

        <div className="bottomContainer">
          <div className="sliderContainer">
            <PrettoSlider />
          </div>
          <div className="controlBox">
            <div className="innerControls">
              <div className="iconBtn">
                <SkipNext fontSize="medium" />
              </div>
              <div className="iconBtn">
                <VolumeUp fontSize="medium" />
              </div>
              <div className="sliderContainer2">
                <Slider className={`${classes.volumeSlider}`} />
                <span>5/20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Control;