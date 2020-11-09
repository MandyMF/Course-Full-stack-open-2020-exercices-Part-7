import blogService from '../services/blogs'
import {setNotification} from './notificationReducer'

const getData = async () => {
  const blogs = await blogService.getAll()
  return blogs
}

const blogReducer = (state = [], action) =>{ 
    switch(action.type){
      case 'INIT_BLOGLIST':
        {
          return action.data
        }
      case 'NEW_BLOG':
        {
          return [...state, action.data]
        }
      case 'LIKE_BLOG':
        {
          return state.map(item => {
            if(item.id === action.data)
            {
              const likedBlog = { ...item }
              likedBlog.likes += 1
              return likedBlog
            }
            return item
          })
        }
      case 'DELETE_BLOG':
        {
          return state.filter(item => {
            return item.id === action.data ? false : true
          })
        }
      default:{
        return state
      }
    }
}

export const initBlogs = () =>{
  return async (dispatch) =>{
    const blogs = await getData()
    dispatch(
      {
        type:'INIT_BLOGLIST',
        data: blogs
      }
    )
  }
}

export const addBlog=(blogToCreate)=>{
  return async (dispatch)=>{
    try{
    let newblog = await blogService.createBlog(
     blogToCreate
    )
    dispatch(setNotification({ success:true, message:`a new blog ${blogToCreate.title} by ${blogToCreate.author} added` }, 5))

    const user_info =  JSON.parse(window.localStorage.getItem('loggedBlogappUser'))
    newblog.user = { id:newblog.user ,username: user_info.username, name: user_info.name }
    dispatch(
      {
        type:'NEW_BLOG',
        data: newblog
      }
    )
  }
  catch (error){
    dispatch(setNotification({ success:false, message:`a new blog ${blogToCreate.title} by ${blogToCreate.author} could not be added` }, 5)) 
  }
  }
}

export const likeBlog=(blog)=>{
  return async (dispatch) =>{
    try{
      await blogService.likeBlog(blog)

      dispatch({
        type:'LIKE_BLOG',
        data: blog.id
      })
    }
    catch(error){
        dispatch(setNotification({ success:false, message:`blog ${blog.title} by ${blog.author} could not be liked` }, 5))
    }
  }
}

export const deleteBlog =(blog)=>{
  return async (dispatch)=>{
    try{
      await blogService.deleteBlog(blog)

      dispatch({
        type:'DELETE_BLOG',
        data: blog.id
      })
      dispatch(setNotification({ success:true, message:`blog ${blog.title} by ${blog.author} has been deleted`},5))
    }
    catch(exception)
    {
      dispatch(setNotification({ success:false, message:`blog ${blog.title} by ${blog.author} could not be deleted` },5))
    }
  }
}


export default blogReducer