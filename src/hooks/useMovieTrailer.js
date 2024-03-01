import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addtrailerVideo } from "../Utils/MoviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (id) => {
    //here we don't pass through {}

    const dispatch=useDispatch();
    const getMoviesVideo=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US',API_OPTIONS);
    const json=await data.json();
    //console.log(json);

    const filterData=json.results.filter(video=>video.type==="Trailer")
    
    //in case of multiple trailer considering first
    const trailer=filterData.length ? filterData[0] : json.results[0];
    dispatch(addtrailerVideo(trailer));
    
  }

  useEffect(()=>{
    getMoviesVideo();
    // eslint-disable-next-line
  },[]);
  return (
    <div>
      
    </div>
  )
}

export default useMovieTrailer
