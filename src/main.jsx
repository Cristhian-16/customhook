import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import { MainApp } from './09-useContext/MainApp'

import { About } from './09-useContext/About'
import { Home } from './09-useContext/Home'
import { Login } from './09-useContext/Login'

import './index.css'
import { ErrorPage } from './09-useContext/ErrorPage'

const root = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={root} />
)
