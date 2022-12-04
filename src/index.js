import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './store'
import './index.css'
// import App from './Components/App'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Home from './Components/Homepage/Home'
import Signin from './Components/Signin/Signin'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Signup from './Components/Signup/Signup'
import { Provider } from 'react-redux'
import SigninAdmin from './Components/Admin/Signin/Signin'
import DashboardAdmin from './Components/Admin/Dashboard/Dashboard'
import App from './Components/Admin/App'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <Provider store={store}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route path="/admin" element={<App />}></Route>
          <Route path="/admin/signin" element={<SigninAdmin />}></Route>
          <Route path="/admin/dashboard" element={<DashboardAdmin />}></Route>
        </Routes>
      </Provider>
    </RecoilRoot>
  </BrowserRouter>
)

reportWebVitals()
