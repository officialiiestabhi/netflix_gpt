import { useState } from "react";

const FormContainer = () => {
    const [isSignIn,setisSignIn]=useState(true);
    const toggleSign=()=>{
        setisSignIn(!isSignIn);
    }
  return (
    //for mx-auto right-0 left-0
    <div className="p-12 bg-black absolute w-4/12 mx-auto right-0 left-0 my-40 opacity-85 rounded-md">
      <form className="flex flex-col space-y-5 text-white">
      <h1 className="text-2xl font-semibold">{isSignIn ? "Sign In" :"Sign Out"}</h1>
      {
        !isSignIn &&
        <input
            type="text"
            placeholder="Full Name"
            className="px-2 py-2 rounded-md  bg-gray-700"
        />
      }
        <input
            type="text"
            placeholder="Email Address"
            className="px-2 py-2 rounded-md  bg-gray-700"
        />
        <input
            type="password"
            placeholder="Password"
            className="px-2 py-2 rounded-md  bg-gray-700"
        />
        <button
        className="bg-red-600 px-2 py-1 rounded-md"
        
        >
            {isSignIn ? "Sign In" :"Sign Out"}
        </button>
        <h1 onClick={toggleSign}
        className="cursor-pointer"
        > {isSignIn ? "New To Netflix? Sign Up Now" :"Already Registered?Sign In Now"}</h1>
      </form>
      
    </div>
  )
}

export default FormContainer

