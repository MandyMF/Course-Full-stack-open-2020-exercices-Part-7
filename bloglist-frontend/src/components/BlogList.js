import React from 'react'
import {useSelector} from 'react-redux'
import Blog from './Blog'

const BlogList = () => { 

  const blogs = useSelector(({blogs}) => blogs.sort((blog1, blog2) => {
    return blog2.likes - blog1.likes
  }))

  return (
    <>
      <ul style={{padding: '0'}}>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}/>
      ))}
      </ul>
    </>
)}

export default BlogList