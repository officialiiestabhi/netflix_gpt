import Header from "./Header"
import FormContainer from "./FormContainer"

const Login = () => {
  return (
    <div >
    <Header/>
    <div className="absolute ">
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"
        alt="bglogo"
        className="w-[1600px]"
      />
    </div>
    <FormContainer/>
    
    </div>
  )
}

export default Login
