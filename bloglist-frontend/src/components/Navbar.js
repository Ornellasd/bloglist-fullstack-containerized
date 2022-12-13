import React, { useState } from 'react'

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
  SwipeableDrawer,
  Box,
} from '@material-ui/core'

import { Close, Menu } from '@material-ui/icons'

import { logout } from '../reducers/loginReducer'

// breakout theme!
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 20
  },
  navbar : {
    backgroundColor : '#689f38'
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
  userCorner: {
    flexGrow: 0.03,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
}))

const MenuDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()

  const toggleDrawer = (event, open) => {
    if(
      event && event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerOpen(open)
  }

  return (
    <Box>
      <IconButton
        className={classes.drawerIcon}
        onClick={(e) => toggleDrawer(e, true)}
      >
        <Menu style={{ color: '#92C565' }} />
      </IconButton>

      <SwipeableDrawer
        anchor="top"
        open={isDrawerOpen}
        onClose={(e) => toggleDrawer(e, false)}
        onOpen={(e) => toggleDrawer(e, true)}
      >
        <Box
          style={{
            display: 'inherit',
            // justifyContent: 'end',
            backgroundColor: '#689f38',
            flexDirection: 'column',
            // alignItems: 'center',
            paddingLeft: '16px',
            paddingRight: '16px',
            height: '100%'
          }}
        >
          <Box style={{
            display: 'inherit',
            justifyContent: 'flex-end',
            // paddingLeft: '16px',
            // paddingRight: '16px',
          }}>
            <IconButton
              onClick={(e) => toggleDrawer(e, false)}
            >
              <Close />
            </IconButton>
          </Box>

          <Divider />
          <Box
            style={{
              // display: 'inherit',
              flexDirection: 'column'
            }}
          >
            <Typography>Test Item 1</Typography>
            <Typography>Test Item 2</Typography>

          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  )
}

const Navbar = ({ currentUser, users }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const user = users.find(u => u.username === currentUser.username)

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Blog App
          </Typography>
          <div className={classes.navLinks}>
            <Button color="inherit" component={Link} to="/blogs">Blogs</Button>
            <Button color="inherit" component={Link} to="/users">Users</Button>
          </div>

          <MenuDrawer />

          <div className={classes.userCorner}>
            <Typography className={classes.userCornerItem}>
              Hello, {user && user.username}
            </Typography>
            <Divider style={{ background: '#92C565' }} orientation="vertical" variant="middle" flexItem />
            <Button color="inherit" component={Link}  to={user && `/users/${user.id}`} >My Posts</Button>
            <Button color="inherit" onClick={() => dispatch(logout())}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Navbar