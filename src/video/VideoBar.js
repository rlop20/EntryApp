import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const VideoBar = ({ videos, title }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;

  const handlePrevClick = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - visibleCount, 0));
  };

  const handleNextClick = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + visibleCount, videos.length - visibleCount));
  };

  const visibleVideos = videos.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="video-bar">
      <h2>{title}</h2>
      <div className="video-container">
        <button onClick={handlePrevClick} disabled={startIndex === 0} className="nav-button">◀</button>
        <div className="video-row">
          {visibleVideos.map((video, index) => (
            <div className="video-item" key={index}>
              <Link to={`/topic${index + 1}`}>
                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              </Link>
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
