import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography
} from '@material-ui/core'

import {
  Chat,
  ThumbUp,
  ThumbDown
} from '@material-ui/icons'

import { upvote, addComment, deleteBlog } from '../reducers/blogReducer'

// import { addComment, deleteBlog } from '../reducers/blogReducer'


const Blog = ({ loggedInUser, blogData }) => {
  const [commentDialogOpen, setCommentDialogOpen] = useState(false)
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isDownvoted, setIsDownvoted] = useState(false)

  const id = useParams().id
  const dispatch = useDispatch()
  const history = useHistory()

  const blog = blogData.blogs.find(b => b.id === id)

  useEffect(() => {
    if (blog.upvoters.includes(loggedInUser.username)) {
      setIsUpvoted(true)
      setIsDownvoted(false)
      // } else if (blog.downvoters.includes(loggedInUser.username)) {
      //   setIsDownvoted(true)
      //   setIsUpvoted(false)
    }

    // console.log(blog, 'blergh')
  }, [blog])

  const handleDelete = () => {
    if (window.confirm(`Delete '${blog.title}' by ${blog.author}?`)) {
      dispatch(deleteBlog(blog))
      history.push('/')
    }
  }

  const handleCommentSubmit = (event) => {
    event.preventDefault()
    const comment = {
      text: event.target.comment.value,
    }

    const commentedBlog = { ...blog, comments: blog.comments.concat(comment) }

    dispatch(addComment(commentedBlog))
    event.target.comment.value = ''
    setCommentDialogOpen(false)
  }

  const handleUpvote = () => {
    setIsDownvoted(false)
    setIsUpvoted(!isUpvoted)
    dispatch(upvote(blog, loggedInUser))
  }

  const handleDownvote = () => {
    setIsUpvoted(false)
    setIsDownvoted(!isDownvoted)
  }

  const dialog = () => (
    <Dialog
      open={commentDialogOpen}
      fullWidth
    >
      <form onSubmit={handleCommentSubmit}>
        <DialogTitle>Create New Comment</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="comment"
            label="Text"
            fullWidth
            autoFocus
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCommentDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">Create</Button>
        </DialogActions>
      </form>
    </Dialog>
  )

  return (
    <>
      <Card variant="outlined" style={{ marginBottom: 20 }}>
        <CardContent>
          <Typography variant="h5">
            {blog.title}
          </Typography>
          <Typography color="textSecondary" style={{ marginBottom: 12 }}>
            added by {blog.user.username}
          </Typography>
          <Typography component={Link} to={blog.url}>
            {blog.url}
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'inherit', alignItems: 'center' }}>
            <IconButton
              onClick={
                () => handleUpvote()
              }
              color={
                isUpvoted ? 'primary' : 'default'
              }
            >
              <ThumbUp />
            </IconButton>
            <Typography>{blog.upvoters.length}</Typography>
            <IconButton
              onClick={() => handleDownvote()}
              color={
                isDownvoted ? 'secondary' : 'default'
              }
            >
              <ThumbDown />
            </IconButton>
          </div>

          <div>
            <IconButton onClick={() => setCommentDialogOpen(true)}>
              <Chat />
            </IconButton>
            {(loggedInUser && loggedInUser.username === blog.user.username) &&
              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
            }
          </div>

        </CardActions>
      </Card>
      {
        blog.comments.length > 0 &&
        <div>
          <Typography align="center" variant="h6">Comments</Typography>
          {blog.comments.map(comment =>
            <Box boxShadow="1" m={3} p={1} bgcolor="#efefef" key={comment.id}>
              {comment.text}
            </Box>
          )}
        </div>
      }
      {dialog()}
    </>
  )
}

export default Blog