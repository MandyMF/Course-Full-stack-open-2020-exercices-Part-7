import userService from '../services/users'

const userListReducer = (state= [], action) => {
  switch(action.type){
  case 'INIT_USERLIST':
  {
    return action.data
  }

  default:
    return state
  }
}

export const initUserList = () => {
  return async (dispatch) => {

    let userList = await userService.getAllUsers()

    dispatch(
      {
        type: 'INIT_USERLIST',
        data: userList
      }
    )
  }
}

export default userListReducer