import YouTube from "react-youtube";

export const YouTubePlayer = ({ videoId }) => {
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}
