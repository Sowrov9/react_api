import React from 'react'
import Home from './pages/Home'
import CreateCustomerPage from './pages/CreateCustomerPage'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Router } from 'react-router'

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
      <Router>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CreateCustomerPage/>} />
      </Router>
      </BrowserRouter> */}
      <Home/>
      <CreateCustomerPage/>
      <ToastContainer/>
    </div>
  )
}

export default App
