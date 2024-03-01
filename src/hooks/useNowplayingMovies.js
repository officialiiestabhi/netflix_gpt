import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";


const useNowplayingMovies=()=>{
    const dispatch=useDispatch();
  //useDispatch has ()

  const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json=await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

  }

  useEffect(()=>{
   
    getNowPlayingMovies();
    // eslint-disable-next-line
  },[])
}

export default useNowplayingMovies;