import { useRef } from "react";
import openai from "../Utils/openAi";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addgptMovies } from "../Utils/GptSlice";
import lang from "../Utils/langConst";


const GptSearchbar = () => {
  const searchText=useRef(null);
  const dispatch=useDispatch();
  //search in tmdb api
 
  const langKey=useSelector((store)=>store.config.lang);
  const tmdbSearch=async (movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json=await data.json();
    return json.results;
  }


   const handlegptSearch=async ()=>{
    const gptQuery="Act as movie recommendation system and suggest movies for the query:"+searchText.current.value+".only give me 5 movies name with , separated like the example result given ahead.Example Result: Golmaal,3 idiots,Run,Don,Sholay";
    const gptresults = await openai.chat.completions.create({
      
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const gptMovie=gptresults.choices[0]?.message?.content.split(",");
    console.log(gptMovie)
    
    const promimseArr=gptMovie.map(movie=>tmdbSearch(movie));
    const tmdbResults=await Promise.all(promimseArr);
    console.log(tmdbResults);
    dispatch(addgptMovies({movieName:gptMovie,movieList:tmdbResults}));
   }

  return (
    <div className="pt-60 justify-center flex">
      <form className="w-1/2 bg-black grid grid-cols-12 "
       onSubmit={(e)=>e.preventDefault()}>
        <input
            type="text" 
            placeholder={lang[langKey].gptsearchPlace}
            className=" m-4 px-2 col-span-9 rounded-l-md"
            
            ref={searchText}
        />
        <button className="border text-white bg-red-500 py-4 px-2  m-4 rounded-r-md col-span-3"
        onClick={handlegptSearch}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchbar
