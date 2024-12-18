import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OPDprod from './component/OPDprod'
import OPDtest from './component/OPDtest'
import DFRprod from './component/DFRprod'
import DFRtest from './component/DFRtest'
import MAAGprod from './component/MAAGprod'
import MAAGtest from './component/MAAGtest'

const appRouter= createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: "/opdprod",
    element:<OPDprod/>
  },
  {
    path: "/opdtest",
    element:<OPDtest/>
  },
  {
    path: "/cpcprod",
    element:<DFRprod/>
  },
  {
    path: "/cpctest",
    element:<DFRtest/>
  },
  {
    path: "/maagprod",
    element:<MAAGprod/>
  },
  {
    path: "/maagtest",
    element:<MAAGtest/>
  },
])
function App() {
  

  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
