import Notification from './Notification'
import React from 'react'
import {userLogin} from '../reducers/userReducer'
import {useDispatch} from 'react-redux'

const LoginForm = () => {
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    dispatch(userLogin(username, password))
  }

  return (
  <>
    <h1>log in to the application</h1>
    <Notification />
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          id="username"
          type="text"
          name="Username"
        />
      </div>
      <div>
        password
        <input
          id="password"
          type="password"
          name="Password"
        />
      </div>
      <button id="login-button" type="submit">login</button>
    </form>
  </>
  )
}

export default LoginForm