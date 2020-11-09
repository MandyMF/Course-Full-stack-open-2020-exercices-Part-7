export const userInfo = (blogs) =>{
  let userinfo = new Object()

  blogs.forEach((blog)=> {
    (userInfo[blog.name] += 1) || (userInfo[blog.name] = 1)
    return 
  })
}