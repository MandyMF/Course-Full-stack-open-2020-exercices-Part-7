import React, {useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import {userLogout} from './reducers/userReducer'

import LoginForm from './components/LoginForm'
import {initBlogs, addBlog} from './reducers/blogReducer'
import {initUser} from './reducers/userReducer'
import BlogList from './components/BlogList'
import UsersInformation from './components/UsersInformation'
import User from './components/User'
import BlogInfo from './components/BlogInfo'

import {initUserList} from './reducers/userListReducer'
import {Switch, Route, Link} from 'react-router-dom'

const App = () => {

  const navbarStyle ={
    backgroundColor: 'lightgrey',
    marginBottom: '10px'
  }

  const dispatch = useDispatch()
  const user = useSelector(({user})=> user)

  useEffect(() => {
    dispatch(initBlogs())
    dispatch(initUserList())
    dispatch(initUser())
  },[dispatch])


  const blogFormRef = useRef()


  const handleLogout = () => {
    dispatch(userLogout())
  }

  const CreateBlog = async (blogToCreate) => {
      dispatch(addBlog(blogToCreate))
      blogFormRef.current.toggleVisibility()
  }

  return (
  
  
  <div>
    {user === null ? 
  <LoginForm /> :
  (
  <div>
  <header style={navbarStyle}>
    <Link to='/'>
      blogs
    </Link>
    {' '}
    <Link to='/users'>
      users
    </Link>
    {' '}
    <span>
      {user.name} logged in <button id="logout-button" onClick={handleLogout}> logout </button>
    </span>
  </header>
  <Notification />
  <h2>blog app</h2>
  <Switch>
    <Route path='/blogs/:id'>
      <BlogInfo />
    </Route>

    <Route path='/users/:id'>
      <User />
    </Route>

    <Route path='/users'>
      <UsersInformation />
    </Route>

    <Route path='/'>
    <Togglable
      buttonLabel='create new blog'
      ref={blogFormRef}>
        <BlogForm CreateBlog={CreateBlog} />
      </Togglable>
      <BlogList>
      </BlogList>
    </Route>

  </Switch>
  </div>
    )
  }
  </div>
  )
}

export default App
