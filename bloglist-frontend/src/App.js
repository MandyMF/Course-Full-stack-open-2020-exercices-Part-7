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

import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Divider
} from '@material-ui/core'

import { withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  buttonRightPadding:{
    paddingRight:'30px'
  },
  title:{
    paddingLeft:'10px'
  },
  blogListDivider:{
    marginTop:'40px'
  },
  appTitle:{
    paddingBottom:"20px"
  }

})

const App = ({classes}) => {
  const classStyle = classes

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
  <AppBar color='secondary'>
    <Toolbar>
      <Button component={Link} to='/'>
      blogs
      </Button>
      <Button component={Link} to='/users'>
      users
      </Button>
      <Button className={classStyle.buttonRightPadding} id="logout-button" onClick={handleLogout}> 
      logout 
      </Button>

    <Typography className={classStyle.title} variant="h5">
      {user.name} logged in 
    </Typography>
    </Toolbar>
  </AppBar>
  <Box paddingTop={10}>
  <Container>
  <Notification />
  <Typography className={classStyle.appTitle} variant="h4">blog app</Typography>
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
      <Divider className={classStyle.blogListDivider}></Divider>
      <BlogList>
      </BlogList>
    </Route>

  </Switch>
  </Container>
  </Box>
  </div>
    )
  }
  </div>
  )
}

export default withStyles(styles)(App)
