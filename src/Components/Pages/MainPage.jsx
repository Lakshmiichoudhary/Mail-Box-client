import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../Auth/Login'
import MailBoxPage from './MailBoxPage'
import MailDetails from './MailDetails'

const MainPage = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
        {
          path : '/mailBox',
          element : <MailBoxPage />
        },
        {
          path : '/mailDetails',
          element : <MailDetails />
        }
    ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default MainPage
