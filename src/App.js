import './App.css'
import React from 'react'
import { store } from './actions/store'
import { Provider } from 'react-redux'
import BookInstances from './components/BookInstances'
import BookInstanceForm from './components/BookInstanceForm'

function App() {
  return (
    <Provider store={store}>
      <BookInstances />
      <BookInstanceForm />
    </Provider>
  )
}

export default App
