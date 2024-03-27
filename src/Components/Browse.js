
import { useSelector } from "react-redux";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptContainer from "./GptContainer";



const Browse = () => {
  const showGpt=useSelector((store)=>store.gpt.showGpt);
  useNowplayingMovies();

  return (
    <div>
      <Header/>
      {
        showGpt ? <GptContainer/> :
        (
          <>
          <MainContainer/>
           <SecondaryContainer/>
          </>
        )
      }
      
      
    </div>
    
  )
}

export default Browse
