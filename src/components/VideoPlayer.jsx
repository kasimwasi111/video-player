import React from "react";
import "../styles/VideoPlayer.css";

function VideoPlayer({ video, onClose }) {
  return (
    <div className="video-modal">
      <div className="video-modal-content">
        <h2>{video.title}</h2>
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <video controls>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="video-description">{video.description}</p>
        <p className="video-author">Author: {video.author}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
