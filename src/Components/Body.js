import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from "react-router-dom"


const Body = () => {
  //navigate hook can only be used in children but body itself is  aprent so we cant use it here
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])

    


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
