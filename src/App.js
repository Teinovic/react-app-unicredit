import './App.css'
import React from 'react'
import { store } from './actions/store'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import BookList from './containers/bookList'
import Header from './containers/header'
import Footer from './containers/footer'
import Home from './containers/home'
import AddBookInstance from './containers/addBookInstance'
import { Layout } from 'antd'

function App() {
  return (
    
    <Provider store={store}>
      <Router>
        <Layout>
          <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/booklist'>
                <BookList />
              </Route>
              <Route exact path='/addbookinstance'>
                <AddBookInstance />
              </Route>
            </Switch>
          <Footer />
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
