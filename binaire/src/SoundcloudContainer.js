import react from "react";

var soundcloudContainerStyle = {
    width: "280px",
    height: "50px",
    position: "absolute",
    top: 0,
    left: 0,
    marginLeft: "40px",
    marginTop: "40px",
    borderRadius: "100px",
    border: "1px solid black",
    display: "flex"
};

var soundcloudContainerInnerStyle = {
    width: "75%",
    backgroundColor: "red"
};

var soundcloudContainerIcon = {



    width: "25%",
    backgroundColor: "transparent"
}

export default function SoundcloudContainer(props) {
    return (
        <div className="soundcloud-container" style={soundcloudContainerStyle}>
            <div id="soundcloud-container-inner" style={soundcloudContainerInnerStyle}>
                <div id="soundcloud-play-pause-icon"></div>
                <div id="soundcloud-track-info">
                    <div id="soundcloud-track-title">Sample Title</div>
                    <div id="soundcloud-track-artist">Sample Artist</div>
                </div>
            </div>
            <div id="soundcloud-container-icon" style={soundcloudContainerIcon}></div>
        </div>
    );
}