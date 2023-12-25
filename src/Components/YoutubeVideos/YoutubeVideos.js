import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  let [YoutubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&key=AIzaSyCP5cKiJ6ok6kegBJIsr7kHn5B_iB7MOGo"
    )
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setYoutubeVideos(data.items);
      });
  }, []);

  // console.log(YoutubeVideos);

  return (
    <div>
      {/* <div className="youtube">YoutubeVideos</div>; */}
      {/* inserted from class component */}
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 ">
              <div className="title-wraper bold video-title-wrapper ">
                YoutubeVideos
              </div>
            </div>
            {YoutubeVideos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
