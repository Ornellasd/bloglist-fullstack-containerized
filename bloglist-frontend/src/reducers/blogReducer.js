
import blogService from '../services/blogs'
import { setAlerts } from '../reducers/alertReducer'

const order = (a, b) => {
  return b.likes - a.likes
}

const initialState = {
  blogs: [],
  requestInProgress: true,
}

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_BLOG':
      return {
        ...state,
        blogs: [...state.blogs, action.data]
      }
    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter(b => b.id !== action.data)
      }
    case 'SET_BLOGS':
      return {
        ...state,
        blogs: action.data.sort(order),
        requestInProgress: false,
      }
    case 'UPVOTE': {
      // const id = action.data
      // const blogToChange = state.blogs.find(b => b.id === id)
      // return {
      //   ...state,
      //   blogs: state.blogs.map(blog => blog.id !== id ? blog : blogToChange).sort(order)
      // }
      return state
    }
    case 'ADD_COMMENT': {
      const id = action.data.id
      const blogToChange = state.blogs.find(b => b.id === id)
      const commentedBlog = {
        ...blogToChange,
        comments: action.data.comments
      }
      return {
        ...state,
        blogs: state.blogs.map(blog => blog.id !== id ? blog : commentedBlog)
      }
    }
    default:
      return state
  }
}

export const createBlog = content => {
  return async dispatch => {
    try {
      const newBlog = await blogService.create(content)
      dispatch({
        type: 'NEW_BLOG',
        data: newBlog
      })
      dispatch(getBlogs())
      dispatch(setAlerts([`${newBlog.title} added`], 'success', 5))
    } catch (e) {
      dispatch(setAlerts(Object.values(e.response.data), 'error', 5))
    }
  }
}

export const deleteBlog = (blog) => {
  return async dispatch => {
    await blogService.deleteBlog(blog.id)
    dispatch({
      type: 'DELETE_BLOG',
      data: blog.id
    })
    dispatch(setAlerts([`${blog.title} deleted`], 'success', 5))
  }
}

export const getBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()

    dispatch({
      type: 'SET_BLOGS',
      data: blogs,
    })
  }
}

export const upvote = (blog, upvoter) => {
  return async dispatch => {

    if (!blog.upvoters.includes(upvoter.username)) {
      const upvotedBlog = {
        ...blog,
        // not sure why not setting user here causes "Cast to ObjectId failed..."
        user: blog.user.id,
        upvoters: [...blog.upvoters, upvoter.username]
      }

      await blogService.update(upvotedBlog)

      dispatch({
        type: 'UPVOTE',
        data: upvoter
      })
    }
  }
}

export const addComment = commentedBlog => {
  return async dispatch => {
    await blogService.addComment(commentedBlog)
    dispatch({
      type: 'ADD_COMMENT',
      data: commentedBlog
    })
  }
}

export default blogReducer