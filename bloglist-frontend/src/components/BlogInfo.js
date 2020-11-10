import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useRouteMatch, useHistory} from 'react-router-dom'
import {likeBlog, deleteBlog, addComment} from '../reducers/blogReducer'

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
  }

  return (
    <div>
    {
    blog ?
    <div>
    <h2>{blog.title} {blog.author}</h2>
      <div>
        </div>
        <a href={blog.url}>{blog.url}</a>
        <div>
					{blog.likes} likes<button onClick={() => handleLikeBlog(blog)}>like</button>
        </div>
        {blog.user.name ? (<div>added by {blog.user.name}</div>) :
                          <div>added by {blog.user.username}</div>
        }
        {blog.user.username === username ?
        <button onClick={() => handleDeleteBlog(blog)}>remove</button> :
        <></>}

        <h3>comments</h3>
        <form onSubmit={handleAddComment}>
        <input id='addComment' name='AddComment' />
        <button type='submit'>add comment</button>
        </form>

        <ul>
        {
          blog.comments.length > 0 ?
          blog.comments.map((comment, index) =>
            <li key={index}>
              {comment}
            </li>
          )
          :
          <p>
            No comments
          </p>

        }
        </ul>
      </div>
      :
        null
    }
    </div>
  )
}

export default BlogInfo