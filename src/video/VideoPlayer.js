import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  useEffect(() => {
    // Configure AWS SDK
    AWS.config.update({
      accessKeyId: 'AKIARMI4CWGJOUVZZCOX',
      secretAccessKey: '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',
      region: 'us-west-1'
    });

    // Create S3 instance
    const s3 = new AWS.S3();

    // Generate signed URL for the video
    const params = {
        Bucket: 'lesson1d',
        Key: 'Desktop 2023.06.07 - 00.12.40.01.mp4',
        Expires: 60 // URL expiration time in seconds (adjust as needed)
      };
  
      const videoUrl = s3.getSignedUrl('getObject', params);
      setVideoUrl(videoUrl);
    }, []);
  
    return (
      <div>
        <h1>Video Player {videoUrl} </h1>
        {videoUrl ? (
          <video controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default VideoPlayer;
