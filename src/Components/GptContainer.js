import GptSearchbar from "./GptSearchbar"
import Gptmoviesugestion from "./Gptmoviesugestion"

const GptContainer = () => {
  return (
    <div>
      <div className="fixed -z-10">
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"
        alt="bglogo"
        className="w-[1600px]"
      />
      </div>
      <GptSearchbar/>
      <Gptmoviesugestion/>
    </div>
  )
}

export default GptContainer
