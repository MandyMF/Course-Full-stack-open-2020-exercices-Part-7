import React from 'react'

import {useSelector} from 'react-redux'

import { Link } from 'react-router-dom'

const UsersInformation = () => { 
  
  const userInfo = useSelector(({userList}) => {
    return userList
    })

  return (
    <>
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
        userInfo.map(user => 
        <tr key={user.id}>
          <td>
            <Link to={`/users/${user.id}`}>
            {user.username}
            </Link>
          </td>
          <td>
            {user.blogs.length}
          </td>
        </tr>
        )}
        </tbody>
      </table>
    </>
)}

export default UsersInformation