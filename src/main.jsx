import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About/About'
import PersonalProject from './pages/PersonalProjects/PersonalProjects'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Home />},
      {
        path: "about", element: <About />
      },
      {
        path: "personalprojects", element: <PersonalProject />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
