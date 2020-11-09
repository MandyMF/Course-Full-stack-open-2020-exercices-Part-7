import React, { useState } from 'react'
import Notification from './Notification'
import {useSelector, useDispatch} from 'react-redux'
import {userLogout} from '../reducers/userReducer'
import {initUserList} from '../reducers/userListReducer'

const UsersInformation = () => { 
  
  const dispatch = useDispatch()
  
  useState(()=>{
    dispatch(initUserList())
  },[dispatch])

  const userInfo = useSelector(({userList}) => {
    return userList.map(user_data => {
      return [user_data.username, user_data.blogs.length]
    })
  })

  const handleLogout = () => {
    dispatch(userLogout())
  }

  
  const user = JSON.parse(window.localStorage.getItem('loggedBlogappUser'))

  return (
    <>
      <h2>blogs</h2>
      <Notification />
      <div>
        <p>
          {user.name} logged in <button id="logout-button" onClick={handleLogout}> logout </button>
        </p>
      </div>
      <h2>Users</h2>

      <table>
        <tbody>
        <tr>
          <th>
          </th>
          <th>
            blogs created
          </th>
        </tr>
        {
        userInfo.map(user_count => 
        <tr key={user_count[0]}>
          <td>
            {user_count[0]}
          </td>
          <td>
            {user_count[1]}
          </td>
        </tr>
        )}
        </tbody>
      </table>
    </>
)}

export default UsersInformation