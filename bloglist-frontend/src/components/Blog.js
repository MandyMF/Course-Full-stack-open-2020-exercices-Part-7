import React from 'react'
import { Link } from 'react-router-dom'
import { 
  TableCell, Button
} from '@material-ui/core'

const Blog = ({ blog }) => {

  return (
    <TableCell>
        <Button component={Link} to={`/blogs/${blog.id}`}>
          {blog.title} {blog.author}{' '}
        </Button>
    </TableCell>
  )
}

export default Blog

