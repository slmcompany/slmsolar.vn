import { useState } from "react";

const VideoSolarmax = () => {
  const videos = [
    "/images/Solarmax-homevideo-01.mp4",
    "/images/Solarmax-homevideo-02.mp4",
    "/images/Solarmax-homevideo-03.mp4",

    // Add more video paths as needed
  ];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="lg:hidden md:hidden relative w-full pb-[177.78%]">
      <img
        src="/images/video-thumb.png"
        alt="Fallback"
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          videoLoaded && !videoError ? "hidden" : ""
        }`}
      />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
      >
        <source src={randomVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSolarmax;
