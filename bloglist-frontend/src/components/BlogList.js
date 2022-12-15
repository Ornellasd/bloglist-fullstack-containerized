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
  },
  listItemDate: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
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

  const formatDate = rawDate => {
    const date = new Date(rawDate)
    return date.toLocaleDateString()
  }

  return (
    <>
      <BlogForm dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} />
      <List>
        {blogs.map(blog =>
          <>
            <ListItem component={Link} to={`/blogs/${blog.id}`} key={blog.id} button>
              <ListItemText primary={blog.title} secondary={`by ${blog.user.username}`} />
              <ListItemText className={classes.listItemDate}>{formatDate(blog.postedAt)}</ListItemText>
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