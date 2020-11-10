import React from 'react'
import {useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography
} from '@material-ui/core'

const User = () =>{

  const match = useRouteMatch('/users/:id')  

  const user = useSelector(({userList})=>{
    return match     
    ? userList.find(user => user.id === match.params.id)    
    : null
  })

  return (
    <div>
    {
    user ?
    <div>
    <Typography variant="h5">{user.username}</Typography>
    <Typography variant="h6">added blogs:</Typography>
        {
        user.blogs.length > 0 ?
        <Table>
          <TableBody>
          {
            user.blogs.map(blog => 
            <TableRow key={blog.id} ><TableCell ><Typography>{blog.title}</Typography></TableCell></TableRow>
            )
          }
          </TableBody>
        </Table>
        :
        <p>
          No blogs created by this user
        </p>
        }
      </div>
      :
      <div>
        ERROR NO USER WITH THAT ID, ILEGAL ACCESS
      </div>
    }
    </div>
  )
}

export default User