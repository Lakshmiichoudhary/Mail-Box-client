import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../Auth/Login'

const MainPages = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        }

    ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default MainPages
