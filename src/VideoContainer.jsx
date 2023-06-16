import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Y_VIDEOS } from "./utils/Constants";
import Sidebar from "./Sidebar";

const VideoContainer = () => {
  const [videos, setVideos] = useState(undefined);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Y_VIDEOS);
    const video = await data.json();
    setVideos(video.items);
  };

  return videos ? (
    <div className="grid grid-flow-col bg-gray-200">
    <Sidebar/>
    <div className="flex flex-wrap justify-end">
      {videos.map((video) => {
        return <VideoCard info={video} />;
      })}
    </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default VideoContainer;
