import React from 'react'

import {useSelector} from 'react-redux'

import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Button,
  Typography
} from '@material-ui/core'

const UsersInformation = () => { 
  
  const userInfo = useSelector(({userList}) => {
    return userList
    })

  return (
    <>
      <Typography variant="h6">Users Info:</Typography>

      <Table>
        
        <TableHead>
          <TableRow>
          <TableCell>
          <Typography>
            Users
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
            blogs created
            </Typography>
          </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        userInfo.map(user => 
        <TableRow key={user.id}>
          <TableCell>
            <Button component={Link} to={`/users/${user.id}`}>
            {user.username}
            </Button>
          </TableCell>
          <TableCell>
            <Typography>
            {user.blogs.length}
            </Typography>
          </TableCell>
        </TableRow>
        )}
        </TableBody>
      </Table>
    </>
)}

export default UsersInformation