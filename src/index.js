import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store'
import './index.css'
// import App from './Components/App'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Home from './Components/Homepage/Home'
import Login from './Components/Login/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Signup from './Components/Signup/Signup'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
)

reportWebVitals()
