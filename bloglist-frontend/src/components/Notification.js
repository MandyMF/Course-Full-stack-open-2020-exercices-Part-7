import React from 'react'
import '../styles/notification.css'
import {useSelector} from 'react-redux'
import {
  Alert
} from '@material-ui/lab'


const Notification = () =>
{
  const {message, success} = useSelector(({notification}) => {
    return notification 
  })

  return message && 
    <Alert color={success ? 'success': 'error'}>
      {message}
    </Alert>
}

export default Notification