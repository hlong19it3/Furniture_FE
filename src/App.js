import './App.css'
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import { Fragment } from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          <Routes>
            {/* <ResetScroll></ResetScroll> */}

            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  )
}

export default App
