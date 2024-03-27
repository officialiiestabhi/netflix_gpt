import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const Gptmoviesugestion = () => {
    const {movieName,movieList}=useSelector(store=>store.gpt);

    if(!movieList)return null;
  return (
    <div className="bg-black bg-opacity-70">
    
       {
        movieName.map((movienaam,index)=>(
      <MovieList title={movienaam} movies={movieList[index]}/>))
       }
    
    </div>
  )
}

export default Gptmoviesugestion
