import React from 'react'
import Notification from './Notification'
import {useSelector, useDispatch} from 'react-redux'
import Blog from './Blog'
import {userLogout} from '../reducers/userReducer'

const BlogList = (props) => { 
  const dispatch = useDispatch()

  const blogs = useSelector(({blogs}) => blogs.sort((blog1, blog2) => {
    return blog2.likes - blog1.likes
  }))

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

      {props.children}

      <ul style={{padding: '0'}}>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}/>
      ))}
      </ul>
    </>
)}

export default BlogList