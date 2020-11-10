import React from 'react'
import {useSelector} from 'react-redux'
import Blog from './Blog'
import {
  Table,
  TableBody,
  TableRow,
  TableContainer
} from '@material-ui/core'

const BlogList = () => { 

  const blogs = useSelector(({blogs}) => blogs.sort((blog1, blog2) => {
    return blog2.likes - blog1.likes
  }))

  return (
    <TableContainer>
      <Table>
      <TableBody>
      {blogs.map((blog) => (
        <TableRow key={blog.id} ><Blog blog={blog}/></TableRow>
      ))}
      </TableBody>
      </Table>
    </TableContainer>
)}

export default BlogList