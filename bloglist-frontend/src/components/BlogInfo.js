import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useRouteMatch, useHistory} from 'react-router-dom'
import {likeBlog, deleteBlog} from '../reducers/blogReducer'

const BlogInfo = () =>{
  const history = useHistory()
  const dispatch = useDispatch()

  const match = useRouteMatch('/blogs/:id')  

  const blog = useSelector(({blogs, user})=>{
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
      </div>
      :
      <div>
        ERROR NO BLOG WITH THAT ID, ILEGAL ACCESS
      </div>
    }
    </div>
  )
}

export default BlogInfo