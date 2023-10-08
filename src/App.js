import React, { useState, useEffect } from "react";
import videoData from "./data/videoData.json";
import VideoPlayer from "./components/VideoPlayer";
import Pagination from "./components/Pagination";
import VideoList from "./components/VideoList"; // Import the VideoList component
import "./App.css";

function App() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  const openVideoModal = (video) => {
    setCurrentVideo(video);
  };

  const closeVideoModal = () => {
    setCurrentVideo(null);
  };

  // Calculate the index range for videos to display on the current page
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videoData.slice(indexOfFirstVideo, indexOfLastVideo);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page when data changes
  }, []);

  return (
    <div className="App">
      <header className="clone">Video Player Clone</header>
      <VideoList videos={currentVideos} openVideoModal={openVideoModal} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(videoData.length / videosPerPage)}
        onPageChange={paginate}
      />

      {/* Video Player */}
      {currentVideo && (
        <VideoPlayer video={currentVideo} onClose={closeVideoModal} />
      )}
    </div>
  );
}

export default App;
