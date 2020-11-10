const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title : 'title 1',
    author: 'author 1',
    url: 'url 1',
    likes: 1,
    user:null
  },
  {
    title: 'title 2',
    author: 'author 2',
    url: 'url 2',
    likes: 2,
    user:null
  },
  {
    title: 'title 3',
    author: 'author 3',
    url: 'url 3',
    likes: 3,
    user:null
  },
  {
    title: 'title 4',
    author: 'author 4',
    url: 'url 4',
    likes: 4,
    user:null
  },
]

const initialUsers= [
  {
    username: 'username1',
    passwordHash: '$2b$10$NAp2qwB3.wD6aXlc7wn4U.S/56lAQVLqkJ/laApg2C1Mmf2kTMeMm', //password1
    name: 'name1',
    blogs:[]
  },
  {
    username: 'username2',
    passwordHash: '$2b$10$NgcoQNYDe.xMEfqoC9q4Lu1h7lkPs9bWFOhU0ooB4JBohzNFAlxWe', //password2
    name: 'name2',
    blogs:[]
  },

]

const blogsInDb = async () => {
  const blogs = await Blog.find({})

  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const blogs = await User.find({})

  return blogs.map(blog => blog.toJSON())
}

module.exports={ initialBlogs, blogsInDb, initialUsers, usersInDb }