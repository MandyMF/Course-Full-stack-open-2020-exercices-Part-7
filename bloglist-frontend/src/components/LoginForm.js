import React from 'react'
import {userLogin} from '../reducers/userReducer'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import {
  TextField,
  Typography,
  Button,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Box
} from '@material-ui/core'

import { withStyles} from '@material-ui/core/styles'

const styles = () =>({
  loginButton:{
    marginTop: "20px"
  },
  title:{
    paddingBottom: "10px",
  },
  container:{
    backgroundColor:"#fdfdfd",
    paddingBottom:'40px', 
  }
})

const LoginForm = (props) => {
  const classes = props.classes
  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    dispatch(userLogin(username, password))
    history.push('/')
  }

  return (
  <>
    <AppBar color='secondary'><Toolbar></Toolbar></AppBar>
    <Box paddingTop={10}>
    <Container className={classes.container}>
    <Grid container justify="center">
      <Grid item>
    <Typography color="primary" variant="h4" className={classes.title}>Log in to the application</Typography>
    <form onSubmit={handleLogin}>
      <Grid container 
      direction="column"
    justify="center"
    alignItems="center">
      <Grid item >
        <TextField
        label="username"
          id="username"
          type="text"
          name="Username"
        />
      </Grid>
      <Grid item>
        
        <TextField
        label="password"
          id="password"
          type="password"
          name="Password"
        />
      </Grid>
      <Grid item>
      <Button className={classes.loginButton} variant="contained" id="login-button" type="submit">login</Button>
      </Grid>
      </Grid>
    </form>
      </Grid>
    </Grid>
  </Container>
  </Box>
  </>
  )
}

export default withStyles(styles)(LoginForm)