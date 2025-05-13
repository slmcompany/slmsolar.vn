import { useState } from "react";

const VideoSolar = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full pb-[100%]">
      {!videoLoaded && (
        <img
          src="/images/benifit-fallback-thumb.png"
          alt="Fallback Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
        onError={() => setVideoLoaded(true)} // Hide the image if video fails to load
      >
        <source src="/images/benefit.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSolar;
