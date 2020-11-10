import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
  Typography,
  Button
} from '@material-ui/core'


import { withStyles} from '@material-ui/core/styles'


const styles= theme => ({
  createButton: {
    marginTop: '20px'
  }
})

const BlogForm = (props) => {
  const classes = props.classes

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
      <Typography>create new</Typography>
      <form onSubmit={handleCreateBlog}>
        <div>
          <TextField
            label='title'
            id='title'
            name='Title'
          ></TextField>
          </div>
          <div>
          <TextField
          label='author'
            id='author'
            name='Author'
          ></TextField>
          </div>
          <div>
          <TextField
           label='url'
            id='url'
            name='Url'
          ></TextField>
        </div>
        <div>
        <Button className={classes.createButton} id="create-blog-button" type="submit" color="primary"  variant="contained">create</Button>
        </div>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  CreateBlog: PropTypes.func.isRequired
}

export default withStyles(styles)(BlogForm)
