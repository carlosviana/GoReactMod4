import React, { Fragment } from "react";
import Sound from "react-sound";
import Slider from "rc-slider";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlayerActions } from "../../store/ducks/player";

import PropTypes from "prop-types";

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

const Player = ({ player, play, pause }) => (
    <Container>
        {!!player.currentSong && (
            <Sound url={player.currentSong.file} playStatus={player.status} />
        )}
        <Current>
            {!!player.currentSong && (
                <Fragment>
                    <img
                        src={player.currentSong.thumbnail}
                        alt={player.currentSong.title}
                    />
                    <div>
                        <span>{player.currentSong.title}</span>
                        <small>{player.currentSong.author}</small>
                    </div>
                </Fragment>
            )}
        </Current>

        <Progress>
            <Controls>
                <button>
                    <img src={ShuffleIcon} alt="Shuffle" />
                </button>
                <button>
                    <img src={Backwardcon} alt="Shuffle" />
                </button>
                {!!player.currentSong &&
                player.status === Sound.status.PLAYING ? (
                    <button onClick={pause}>
                        <img src={PauseIcon} alt="Shuffle" />
                    </button>
                ) : (
                    <button onClick={play}>
                        <img src={PlayIcon} alt="Shuffle" />
                    </button>
                )}
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

Player.propTypes = {
    player: PropTypes.shape({
        currentSong: PropTypes.shape({
            file: PropTypes.string,
            status: PropTypes.string,
            thumbnail: PropTypes.string,
            title: PropTypes.string,
            author: PropTypes.string
        })
    }).isRequired,
    play: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    player: state.player
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(PlayerActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);
