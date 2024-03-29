import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import {
  Divider,
  Fab,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

import Loading from '../components/Loading'
import BlogForm from '../components/BlogForm'

const useStyles = makeStyles(() => ({
  addButton: {
    right: 20,
    bottom: 20,
    position: 'fixed'
  },
  listItemDate: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  centerText: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const BlogList = ({ blogData, users }) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const classes = useStyles()
  const userId = useParams().id

  const user = users.find(u => u.id === userId)
  const blogList = user ? user.blogs : blogData.blogs

  const formatDate = rawDate => {
    const date = new Date(rawDate)
    return date.toLocaleDateString()
  }

  if (blogData && blogData.requestInProgress) {
    return <Loading />
  }

  return (
    <>
      <BlogForm dialogOpen={dialogOpen} handleDialogClose={() => setDialogOpen(false)} />
      <List>
        {blogList.map(blog =>
          <>
            <ListItem component={Link} to={`/blogs/${blog.id}`} key={blog.id} button>
              <ListItemText primary={blog.title} secondary={!user ? `by ${blog.user.username}` : ''} />
              <ListItemText className={classes.listItemDate}>
                <Typography variant="caption">
                  {formatDate(blog.postedAt)}
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        )}
      </List>
      {blogList.length === 0 &&
        <Typography className={classes.centerText}>No posts found :(</Typography>
      }
      <Fab size="medium" color="primary" className={classes.addButton} onClick={() => setDialogOpen(true)}>
        <AddIcon />
      </Fab>
    </>
  )
}

export default BlogList