import MoviesCard from "./MoviesCard"

const MovieList = ({title,movies}) => {
  console.log(movies);
  return (
    <div className="pl-4">

    
    <h1 className="text-2xl font-semibold mt-2 mb-4 text-white">{title}</h1>
    
      <div className="flex overflow-x-scroll scrollbar-thin">
      <div className="flex ">
      {
        
        movies.map((movies)=> <MoviesCard key={movies.id} poster_path={movies.poster_path} />)
      }
      </div>

      </div>
      
    </div>
  )
}

export default MovieList
