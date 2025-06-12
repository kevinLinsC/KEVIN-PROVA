import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'

// Importação do MyRouter
import MyRouter from "./MyRouter.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MyRouter} />
  </StrictMode>,
)
  