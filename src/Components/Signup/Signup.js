import React, { useState, useEffect } from 'react'
import './Signup.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { SignupUser } from '../../Actions/UserAction'
// import { data } from 'autoprefixer'

function Signup(props) {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    if (password === confirmPassword) {
      dispatch(SignupUser(data))
    } else {
      alert('wrong repeat password')
    }
  }

  return (
    <div className="signup-page">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-signup">
        <input
          {...register('firstName')}
          placeholder="First name"
          required
        ></input>
        <input
          {...register('lastName')}
          placeholder="Last name"
          required
        ></input>

        <input
          {...register('email')}
          placeholder="Email"
          type="email"
          required
        ></input>
        <input {...register('address')} placeholder="Address" required></input>
        <input
          {...register('phone')}
          placeholder="Phone number"
          required
        ></input>
        <input
          {...register('password')}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <input
          {...register('repeat password')}
          placeholder=" Repeat password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        ></input>

        <input type="submit" value="Sign up"></input>
      </form>
    </div>
  )
}

export default Signup
