import blogService from '../services/blogs'
import loginService from '../services/login'
import {setNotification} from './notificationReducer'


const notificationReducer = (state= null, action) => {
  switch(action.type){
  case 'INIT_USER':
  {
    return action.data
  }
  case 'USER_LOGIN':
  {
    return action.data
  }

  case 'USER_LOGOUT':
  {
    return null
  }
  default:
    return state
  }
}

export const userLogin = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      
      dispatch(
        {
          type: 'USER_LOGIN',
          data: user
        }
      )

    } catch (exception) {
      console.error('ERROR ON LOGIN IN')
      dispatch(setNotification({ success:false, message:'wrong username or password' }, 5))
    }

  }
}

export const userLogout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch(
      {
        type: 'USER_LOGOUT',
      }
    )
  }
}

export const initUser = () => {
  return async (dispatch) => {

    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    let user = null
    
    if (loggedUserJSON) {
      user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
    }

    dispatch(
      {
        type: 'INIT_USER',
        data: user
      }
    )
  }
}

export default notificationReducer