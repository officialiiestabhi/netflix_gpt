import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import {auth} from "../Utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import {  useNavigate } from "react-router-dom";
import { CNY_LOGO, USER_LOGO } from "../Utils/Constants";

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)

  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      console.log(error);
    }); 
  }
 
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse");
        //this will throw ans error as it not a parent component where router is defined
        //it will work only in childrens
        // ...
    
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    // eslint-disable-next-line
  },[])

  return (
    <div className="absolute z-10 w-screen bg-gradient-to-b from-black flex justify-between">
      
    <img
      src={CNY_LOGO}
      alt="netflixlogo"
      className="w-40"
    />
    
    
      {user &&
      <div className="mr-3 mt-3 flex space-x-4 p-1">
      <img
        src={USER_LOGO}
        alt="userlogo"
        className="w-10"
      />
      <button onClick={handleSignout} className="ml-1 border cursor-pointer">sign Out</button>
      
    </div>
      }
    
    
  </div>
  )
}

export default Header
