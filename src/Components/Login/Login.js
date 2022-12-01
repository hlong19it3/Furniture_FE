import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import CustomAxios from '../../config/api'

function Login(props) {
  const navigate = useNavigate()
  const [passwordShown, setPasswordShown] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await CustomAxios.post('/api/v1/users/signin', {
      email,
      password,
    })
    if (res.status === 200) {
      // localStorage.setItem('userInfo', JSON.stringify(res?.data.tokens))
      navigate('/home')
    }
  }

  return (
    <div className="bg">
      <div className="login-page">
        <h4> WELCOME TO FURNITURE ONLINE STORE </h4>
        <form onSubmit={handleSubmit} className="form-login">
          <input
            value={email}
            placeholder="Email"
            required
            onChange={handleChangeEmail}
          ></input>
          <input
            value={password}
            placeholder="Password"
            type={passwordShown ? 'text' : 'password'}
            // type="password"
            required
            onChange={handleChangePassword}
          ></input>
          <i
            className="fa-solid fa-eye showPassIcon"
            onClick={togglePassword}
          />
          <br></br>

          <input type="submit" value="Login"></input>

          <Link
            to="/forgot-password"
            style={{ textDecoration: 'underline red' }}
          >
            Forgot password?
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            Create new account!
          </Link>
        </form>
      </div>
    </div>
  )
}
export default Login
