import { useSelector } from "react-redux"
import MovieList from "./MovieList";



const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);

  return (
    movies &&(
    <div className="bg-black">
    <div className="-mt-72 relative z-20">
       <MovieList title={"Now Playing Movies"} movies={movies}/>
       <MovieList title={"Now Playing Movies"} movies={movies}/>
       <MovieList title={"Now Playing Movies"} movies={movies}/>
       <MovieList title={"Now Playing Movies"} movies={movies}/>
    </div>
    </div>
    )
  )
}

export default SecondaryContainer
