import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground";


const MainContainer = () => {
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies)return;
  const mainvideo=movies[0];
  //console.log(mainvideo);
  const {original_title,overview,id}=mainvideo;
  return (
    <div  >
      <VideoTitle title={original_title} des={overview}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer
