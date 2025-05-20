import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , Route, RouterProvider} from 'react-router'
import About from './pages/About'

const router = createBrowserRouter([
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/",
          element:<App></App>
        },
        {}
      ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
  
)
