import React from 'react'
import {useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'

const User = () =>{

  const match = useRouteMatch('/users/:id')  

  const user = useSelector(({userList})=>{
    return match     
    ? userList.find(user => user.id === match.params.id)    
    : null
  })

  return (
    <div>
    {
    user ?
    <div>
    <h2>{user.username}</h2>
    <h3>added blogs</h3>
        {
        user.blogs.length > 0 ?
        <ul>
          {
            user.blogs.map(blog => 
            <li key={blog.id}>{blog.title}</li>
            )
          }
        </ul>
        :
        <p>
          No blogs created by this user
        </p>
        }
      </div>
      :
      <div>
        ERROR NO USER WITH THAT ID, ILEGAL ACCESS
      </div>
    }
    </div>
  )
}

export default User