import './App.css'
import React from 'react'
import { store } from './actions/store'
import { Provider } from 'react-redux'
import BookInstances from './components/BookInstances'

function App() {
  return (
    <Provider store={store}>
      <BookInstances />
    </Provider>
  )
}

export default App