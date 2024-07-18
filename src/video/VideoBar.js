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

const getVisibleCount = (width) => {
  if (width >= 1200) return 5;
  if (width >= 800) return 4;
  if (width >= 600) return 3;
  return 2;
};

const VideoBar = ({ videos, title }) => {
  const size = useWindowSize();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount(size.width));

  useEffect(() => {
    const newVisibleCount = getVisibleCount(size.width);
    setVisibleCount(newVisibleCount);

    // Adjust startIndex if necessary to keep the current view within bounds
    if (startIndex + newVisibleCount > videos.length) {
      setStartIndex(Math.max(0, videos.length - newVisibleCount));
    }
  }, [size.width, startIndex, videos.length]);

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
              <Link to={video.link}>
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
