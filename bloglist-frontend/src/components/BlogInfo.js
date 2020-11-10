import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useRouteMatch, useHistory} from 'react-router-dom'
import {likeBlog, deleteBlog, addComment} from '../reducers/blogReducer'

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
  Link,
  TextField,
  Divider
} from '@material-ui/core'

const BlogInfo = () =>{
  const history = useHistory()
  const dispatch = useDispatch()

  const match = useRouteMatch('/blogs/:id')  

  const blog = useSelector(({blogs})=>{
    return match     
    ? blogs.find(blog => blog.id === match.params.id)    
    : null
  })

  const username = useSelector(({user})=> user.username)

  const handleLikeBlog =  async blog => {
    dispatch(likeBlog(blog))
  }

  const handleDeleteBlog = async blog => {

    if(!(window.confirm(`Remove blog ${blog.title} by ${blog.author}`)))
    {
      return
    }
    history.push('/')
    dispatch(deleteBlog(blog))
  }

  const handleAddComment=(event)=>{
    event.preventDefault()

    dispatch(addComment( blog, event.target.AddComment.value )) 
    event.target.AddComment.value=''
  }

  return (
    <div>
    {
    blog ?
    <div >
    <Typography variant="h5">{blog.title} {blog.author}</Typography>
      <div>
        </div>
        <Link href={blog.url}>{blog.url}</Link>
        <Typography>
					{blog.likes} likes   <Button color="primary" variant="contained" onClick={() => handleLikeBlog(blog)}>like</Button>
        </Typography>
        {blog.user.name ? (<Typography variant="h6">added by {blog.user.name}</Typography>) :
                          <Typography variant="h6">added by {blog.user.username}</Typography>
        }
        {blog.user.username === username ?
        <Button variant="contained" color="secondary" onClick={() => handleDeleteBlog(blog)}>remove</Button> :
        <></>}

        <Typography variant="h5">comments</Typography>
        <form onSubmit={handleAddComment}>
        <TextField label="comment" id='addComment' name='AddComment' />
        <Button type='submit'>add comment</Button>
        </form>
        <Divider style={{marginTop:"20px"}}/>
        <Table>
          <TableBody>
        {
          blog.comments.length > 0 ?
          blog.comments.map((comment, index) =>
            <TableRow key={index}><TableCell >
              {comment}
            </TableCell></TableRow>
          )
          :
          <TableRow>
          <TableCell>
            No comments
          </TableCell>
          </TableRow>

        }
        </TableBody>
        </Table>
      </div>
      :
        null
    }
    </div>
  )
}

export default BlogInfo