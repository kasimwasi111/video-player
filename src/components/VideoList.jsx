import React, { useState } from "react";
import "../styles/VideoList.css";
import { AiOutlinePlayCircle } from "react-icons/ai";

const VideoList = ({ videos, openVideoModal }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openDetailsPopup = (video) => {
    setSelectedVideo(video);
  };

  const closeDetailsPopup = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            onClick={() => openVideoModal(video)}
            className="video-thumbnail"
          />
          <AiOutlinePlayCircle
            className="play-icon"
            onClick={() => openVideoModal(video)}
          />
          <div className="video-info">
            <h2 className="video-title">{video.title}</h2>
            <p className="view">Views: {video.views}</p>
            <button
              className="details-button"
              onClick={() => openDetailsPopup(video)}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
      {/* Details Popup */}
      {selectedVideo && (
        <div className="details-popup">
          <div className="details-popup-content">
            <span className="close-button" onClick={closeDetailsPopup}>
              &times;
            </span>
            <h2 className="video-title">{selectedVideo.title}</h2>
            <img
              src={selectedVideo.thumbnailUrl}
              alt={selectedVideo.title}
              className="video-thumbnail"
            />
            <p className="video-description">{selectedVideo.description}</p>
            <p className="video-author">Author: {selectedVideo.author}</p>
            <p className="view">Views: {selectedVideo.views}</p>
            <p className="duration">Duration: {selectedVideo.duration} min</p>
            <p className="upload-date">
              Upload Date: {selectedVideo.uploadTime}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoList;
