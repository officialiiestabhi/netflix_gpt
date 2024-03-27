import { IMG_CDN_URL } from "../Utils/Constants";

const MoviesCard = ({poster_path}) => {
    if(!poster_path)return null;
  return (
    <div className="w-48 pr-3">
    <img
        src={IMG_CDN_URL+poster_path}
        alt="movies"
        className="rounded-md"
    />
    </div>
  )
}

export default MoviesCard
