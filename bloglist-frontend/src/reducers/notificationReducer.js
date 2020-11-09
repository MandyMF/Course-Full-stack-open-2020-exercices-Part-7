let timeoutID= null

const notificationReducer = (state= {message: null, success: true}, action) => {
  switch(action.type){
  case 'SET_NOTIFICATION_MESSAGE':
  {
    return {
      message: action.data.message, 
      success: action.data.success,
    }
  }
  default:
    return state
  }
}


export const setNotification = ({message, success}, timeout) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION_MESSAGE',
      data: {message, success}
    })

    if(timeoutID)
      clearTimeout(timeoutID)

    timeoutID= setTimeout(() => {
      dispatch(
        {
          type: 'SET_NOTIFICATION_MESSAGE',
          data: {message: null, success: true}
        }
      )
    }, timeout * 1000)
  }
}

export default notificationReducer