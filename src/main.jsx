import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeView from './views/HomeView.jsx'
import DashboardView from './views/DashboardView.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/dashboard',
    element: <DashboardView />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
