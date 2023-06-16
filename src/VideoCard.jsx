import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
<div className="p-2 m-2 w-44 shadow-md">
  <img className="" src={thumbnails?.high?.url} alt="" />
  <ul className="font-bold">
    <li>
        {title}
    </li>
    <li>
        {statistics.viewCount}
    </li>
  </ul>
</div>


  );
};

export default VideoCard;
