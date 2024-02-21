import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../Auth/Login'
import MailBoxPage from './MailBoxPage'

const MainPage = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
        {
          path : '/mailBox',
          element : <MailBoxPage />
        }

    ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default MainPage
