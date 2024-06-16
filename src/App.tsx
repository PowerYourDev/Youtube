
import { FC } from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import AppLayout from "./Layout/AppLayout"


const App:FC = () => {

  const appRoutes = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[

      ]
    }

  ])
   
  return (

<RouterProvider router={appRoutes}/>

 

  )
}

export default App