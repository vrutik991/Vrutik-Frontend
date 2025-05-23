import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , Route, RouterProvider} from 'react-router-dom'
import About from './pages/About'
import ScrollToTop from './services/ScrollToTop.jsx'

const router = createBrowserRouter([
        {
          path:"about",
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
      <RouterProvider router={router}> <ScrollToTop/> </RouterProvider>
    </StrictMode>,



)
