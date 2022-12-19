import React from 'react'

import { useState } from 'react'
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
}))


const BlogList = ({ blogs }) => {
  const classes = useStyles()

  const [dialogOpen, setDialogOpen] = useState(false)

  const formatDate = rawDate => {
    const date = new Date(rawDate)
    return date.toLocaleDateString()
  }

  return (
    <>
      <BlogForm dialogOpen={dialogOpen} handleDialogClose={() => setDialogOpen(false)} />
      <List>
        {blogs.map(blog =>
          <>
            <ListItem component={Link} to={`/blogs/${blog.id}`} key={blog.id} button>
              <ListItemText primary={blog.title} secondary={`by ${blog.user.username}`} />
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
      <Fab size="medium" color="primary" className={classes.addButton} onClick={() => setDialogOpen(true)}>
        <AddIcon />
      </Fab>
    </>
  )
}

export default BlogList