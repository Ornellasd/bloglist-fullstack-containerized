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
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

import BlogForm from '../components/BlogForm'

const useStyles = makeStyles(() => ({
  addButton: {
    right: 20,
    bottom: 20,
    position: 'fixed'
  }
}))


const BlogList = ({ blogs }) => {
  const classes = useStyles()

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  return (
    <>
      <BlogForm dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} />
      <List>
        {blogs.map(blog =>
          <>
            <ListItem component={Link} to={`/blogs/${blog.id}`} key={blog.id} button>
              <ListItemText primary={blog.title} secondary={`by ${blog.user.username}`} />
            </ListItem>
            <Divider />
          </>
        )}
      </List>
      <Fab size="medium" color="primary" className={classes.addButton} onClick={handleDialogOpen}>
        <AddIcon />
      </Fab>
    </>
  )
}

export default BlogList