import React from 'react'
import MainPage from './Components/Pages/MainPage'
import { Provider } from 'react-redux'
import appStore from './Store/Store'


const App = () => {

  return (
    <Provider store={appStore}>
        <MainPage />
    </Provider>
  )
}

export default App
