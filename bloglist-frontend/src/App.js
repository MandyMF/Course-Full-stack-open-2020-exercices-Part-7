import React, {useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'

import LoginForm from './components/LoginForm'
import {initBlogs, addBlog} from './reducers/blogReducer'
import {initUser} from './reducers/userReducer'
import BlogList from './components/BlogList'

const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(({user})=> user)

  useEffect(() => {
    dispatch(initBlogs())
  },[dispatch])

  const blogFormRef = useRef()

  useEffect(() => {
    dispatch(initUser())
  }, [dispatch])


  const CreateBlog = async (blogToCreate) => {
      dispatch(addBlog(blogToCreate))
      blogFormRef.current.toggleVisibility()
  }

  return <div>{user === null ? 
  <LoginForm /> :
  <BlogList>
    <Togglable
    buttonLabel='create new blog'
    ref={blogFormRef}>
      <BlogForm CreateBlog={CreateBlog} />
    </Togglable>
  </BlogList>
}
</div>
}

export default App
