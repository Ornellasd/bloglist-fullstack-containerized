import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import {
  AppBar,
  Button,
  IconButton,
  Divider,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import { Close, Menu } from '@material-ui/icons'

import { logout } from '../reducers/loginReducer'

// breakout theme!
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 20
  },
  navbar: {
    backgroundColor: '#689f38'
  },
  title: {
    marginRight: theme.spacing(5),
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  navLinks: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  drawerIcon: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   display: 'none',
    // }
  },
  drawerLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  userCorner: {
    flexGrow: 0.03,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  list: {
    height: '100%',
    width: 300,
    backgroundColor: '#689f38',
  },
}))

const ListItemLink = ({ text, href, ...props }) => {
  const classes = useStyles()

  return (
    <ListItem
      className={classes.drawerLink}
      component={Link}
      to={href}
      {...props}
    >
      <ListItemText>
        <Typography>
          {text}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

const MenuDrawer = ({ user }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleDrawer = (event, open) => {
    if (
      event && event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerOpen(open)
  }

  const handleListItemClick = (event, index) => {
    toggleDrawer(event, false)
    setSelectedIndex(index)
  }

  return (
    <>
      <IconButton
        className={classes.drawerIcon}
        onClick={(e) => toggleDrawer(e, true)}
        edge="end"
      >
        <Menu style={{ color: '#92C565' }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={(e) => toggleDrawer(e, false)}
        onOpen={(e) => toggleDrawer(e, true)}
      >
        <div
          role="presentation"
          className={classes.list}
        >
          <List>
            <ListItem style={{ justifyContent: 'flex-end' }}>
              <IconButton
                onClick={(e) => toggleDrawer(e, false)}
                edge="end"
              >
                <Close style={{ color: '#92C565' }} />
              </IconButton>
            </ListItem>
            <Divider />
            <ListItemLink text="Blogs" href="/blogs" onClick={(e) => handleListItemClick(e, 0)} selected={selectedIndex === 0} />
            <ListItemLink text="Users" href="/users" onClick={(e) => handleListItemClick(e, 1)} selected={selectedIndex === 1} />
            <Divider />
            <ListItemLink text="My Posts" href={`/users/${user && user.id}`} onClick={(e) => handleListItemClick(e, 2)} selected={selectedIndex === 2} />
            <ListItemLink text="Log Out" onClick={() => dispatch(logout())} />
          </List>
        </div>
      </Drawer>
    </>
  )
}

const Navbar = ({ loggedInUser, users }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(loggedInUser && users.find(u => u.username === loggedInUser.username))
  }, [loggedInUser, users])

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Blog App
          </Typography>
          {loggedInUser &&
            <>
              <div className={classes.navLinks}>
                <Button color="inherit" component={Link} to="/blogs">Blogs</Button>
                <Button color="inherit" component={Link} to="/users">Users</Button>
              </div>

              <MenuDrawer user={user} />

              <div className={classes.userCorner}>
                <Typography className={classes.userCornerItem}>
                  {user && `Hello, ${user.username}`}
                </Typography>
                <Divider style={{ background: '#92C565' }} orientation="vertical" variant="middle" flexItem />
                <Button color="inherit" component={Link} to={user && `/users/${user.id}`} >My Posts</Button>
                <Button color="inherit" onClick={() => dispatch(logout())}>Logout</Button>
              </div>
            </>
          }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Navbar