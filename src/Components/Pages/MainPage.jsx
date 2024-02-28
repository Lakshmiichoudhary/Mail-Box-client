import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../Auth/Login'
import MailBoxPage from './MailBoxPage'
import MailDetails from './MailDetails'
import Sentmail from './Sentmail'

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
        },
        {
          path : '/sentMail',
          element : <Sentmail />
        }
    ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default MainPage
