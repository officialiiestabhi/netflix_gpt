import { useRef, useState } from "react";
import isValidData from "../Utils/isValidData";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";

const FormContainer = () => {

  const email=useRef(null);
  const password=useRef(null);
  const [Errmsg,setErrmsg]=useState("");

 
  const checkData=()=>{
    const msg=isValidData(email.current.value,password.current.value);
    setErrmsg(msg);
    if(msg)return;
    //if any error message then not proceed

    //sign up logic

   if(!isSignIn){
    //that means it is is sign up

    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrmsg(errorCode+"-"+errorMessage);
      // ..
    });
   }else{
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrmsg(errorCode+"-"+errorMessage);
  });
   }

  }


  const [isSignIn,setisSignIn]=useState(true);
  const toggleSign=()=>{
      setisSignIn(!isSignIn);
  }
  return (
    //for mx-auto right-0 left-0
    <div className="p-12 bg-black absolute w-4/12 mx-auto right-0 left-0 my-40 opacity-85 rounded-md">
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className="flex flex-col space-y-5 text-white">
      <h1 className="text-2xl font-semibold">{isSignIn ? "Sign In" :"Sign Up"}</h1>
      {
        !isSignIn &&
        <input
            type="text"
            placeholder="Full Name"
            className="px-2 py-2 rounded-md  bg-gray-700"
        />
      }
        <input
           ref={email}
            type="text"
            placeholder="Email Address"
            className="px-2 py-2 rounded-md  bg-gray-700"
        />
        <input
           ref={password}
            type="password"
            placeholder="Password"
            className="px-2 py-2 rounded-md  bg-gray-700"
        />
        <h1 className="text-red-700 font-semibold">{Errmsg}</h1>
        <button
        className="bg-red-600 px-2 py-2 font-semibold text-lg rounded-md"
        onClick={checkData}
        >
            {isSignIn ? "Sign In" :"Sign Up"}
        </button>
        <h1 onClick={toggleSign}
        className="cursor-pointer"
        > {isSignIn ? "New To Netflix? Sign Up Now" :"Already Registered?Sign In Now"}</h1>
      </form>
      
    </div>
  )
}

export default FormContainer

