import React from 'react'
import '../styles/notification.css'
import {useSelector} from 'react-redux'


const Notification = () =>
{
  const {message, success} = useSelector(({notification}) => {
    return notification 
  })

  return message && 
    <div className={success ? 'success': 'error'}>
      {message}
    </div>
}

export default Notification