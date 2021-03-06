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

const Player = ({
    player,
    play,
    pause,
    next,
    prev,
    playing,
    position,
    duration,
    positionShow,
    progress,
    handlePosition,
    setPosition,
    setVolume
}) => (
    <Container>
        {!!player.currentSong && (
            <Sound
                url={player.currentSong.file}
                playStatus={player.status}
                onFinishedPlaying={next}
                onPlaying={playing}
                position={player.position}
                volume={player.volume}
            />
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
                <button onClick={prev}>
                    <img src={Backwardcon} alt="Backward" />
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
                <button onClick={next}>
                    <img src={ForwardIcon} alt="Shuffle" />
                </button>
                <button>
                    <img src={RepeatIcon} alt="Shuffle" />
                </button>
            </Controls>

            <Time>
                <span>{positionShow || position}</span>
                <ProgressSlider>
                    <Slider
                        railStyle={{ background: "#404040", borderRadius: 10 }}
                        trackStyle={{ background: "#1ED760" }}
                        handleStyle={{ border: 0 }}
                        max={1000}
                        onChange={value => handlePosition(value / 1000)}
                        onAfterChange={value => setPosition(value / 1000)}
                        value={progress}
                    />
                </ProgressSlider>
                <span>{duration}</span>
            </Time>
        </Progress>

        <Volume>
            <img src={VolumeIcon} alt="Volume" />
            <Slider
                railStyle={{ background: "#404040", borderRadius: 10 }}
                trackStyle={{ background: "#FFF" }}
                handleStyle={{ display: "none" }}
                value={player.volume}
                onChange={setVolume}
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
    pause: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    playing: PropTypes.func.isRequired,
    handlePosition: PropTypes.func.isRequired,
    setPosition: PropTypes.func.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    positionShow: PropTypes.string.isRequired,
    setVolume: PropTypes.func.isRequired
};

function msToTime(duration) {
    if (!duration) return null;

    let seconds = parseInt((duration / 1000) % 60, 10);
    let minutes = parseInt((duration / (1000 * 60)) % 60, 10);

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
    player: state.player,
    position: msToTime(state.player.position),
    duration: msToTime(state.player.duration),
    positionShow: msToTime(state.player.positionShow),
    progress:
        parseInt(
            (state.player.positionShow || state.player.position) *
                (1000 / state.player.duration),
            10
        ) || 0
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(PlayerActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);
