import React from "react";

import Slider from "rc-slider";

import {
    Container,
    Current,
    Volume,
    Progress,
    Controls,
    Time,
    ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import Backwardcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
    <Container>
        <Current>
            <img
                src={
                    "https://http2.mlstatic.com/jorge-arago-20-musicas-do-seculo-x-x-serie-millennium-D_NQ_NP_942611-MLB20583386384_022016-F.jpg"
                }
                alt={"Jorge Aragão"}
            />
            <div>
                <span>Papel de pão</span>
                <small>Jorge Aragão</small>
            </div>
        </Current>

        <Progress>
            <Controls>
                <button>
                    <img src={ShuffleIcon} alt="Shuffle" />
                </button>
                <button>
                    <img src={Backwardcon} alt="Shuffle" />
                </button>
                <button>
                    <img src={PlayIcon} alt="Shuffle" />
                </button>
                <button>
                    <img src={ForwardIcon} alt="Shuffle" />
                </button>
                <button>
                    <img src={RepeatIcon} alt="Shuffle" />
                </button>
            </Controls>

            <Time>
                <span>1:39</span>
                <ProgressSlider>
                    <Slider
                        railStyle={{ background: "#404040", borderRadius: 10 }}
                        trackStyle={{ background: "#1ED760" }}
                        handleStyle={{ border: 0 }}
                    />
                </ProgressSlider>
                <span>4:55</span>
            </Time>
        </Progress>

        <Volume>
            <img src={VolumeIcon} alt="Volume" />
            <Slider
                railStyle={{ background: "#404040", borderRadius: 10 }}
                trackStyle={{ background: "#FFF" }}
                handleStyle={{ display: "none" }}
                value={100}
            />
        </Volume>
    </Container>
);

export default Player;
