import React, { useState, useEffect } from 'react';
import './VideoBar.css';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const VideoBar = ({ videos }) => {
  const size = useWindowSize();
  const [startIndex, setStartIndex] = useState(0);

  const getVisibleCount = () => {
    if (size.width >= 1200) return 5;
    if (size.width >= 800) return 4;
    if (size.width >= 600) return 3;
    return 2;
  };

  const visibleCount = getVisibleCount();

  const handlePrevClick = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - visibleCount, 0));
  };

  const handleNextClick = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + visibleCount, videos.length - visibleCount));
  };

  const visibleVideos = videos.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="video-bar">
      <h2>Topic One</h2>
      <div className="video-container">
        <button onClick={handlePrevClick} disabled={startIndex === 0} className="nav-button">◀</button>
        <div className="video-row">
          {visibleVideos.map((video, index) => (
            <div className="video-item" key={index}>
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNextClick} disabled={startIndex + visibleCount >= videos.length} className="nav-button">▶</button>
      </div>
    </div>
  );
};

export default VideoBar;
