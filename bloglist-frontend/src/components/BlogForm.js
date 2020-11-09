import React from 'react'
import PropTypes from 'prop-types'


const BlogForm = (props) => {

  const handleCreateBlog = (event) => {
    event.preventDefault()

    const title = event.target.Title.value
    const author = event.target.Author.value
    const url = event.target.Url.value

    props.CreateBlog({ title, author, url })

    event.target.Title.value=''
    event.target.Author.value=''
    event.target.Url.value=''
  }
  

  return (
    <div>
      <h1>create new</h1>
      <form onSubmit={handleCreateBlog}>
        <div>
					title:
          <input
            id='title'
            name='Title'
          ></input>
        </div>
        <div>
					author:
          <input
            id='author'
            name='Author'
          ></input>
        </div>
        <div>
					url:
          <input
            id='url'
            name='Url'
          ></input>
        </div>

        <button id="create-blog-button" type="submit">create</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  CreateBlog: PropTypes.func.isRequired
}

export default BlogForm
