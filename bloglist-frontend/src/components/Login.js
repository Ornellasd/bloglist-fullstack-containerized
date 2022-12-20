import React, { useState } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import {
  Avatar,
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'

import Alerts from './Alerts'

// import { useDispatch } from 'react-redux'
// import { Link, useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'

// import { login } from '../reducers/loginReducer'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: 'none'
  }
}))

const LoginWIP = ({ classes, isLogIn, setIsLogIn }) => {
  const handleSubmit = () => {
    console.log('hieperdepiep')
  }

  if(!isLogIn) {
    return null
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Username"
        name="username"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoFocus
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Log In
      </Button>
      <Typography>
        Don&apos;t have an account? Sign Up <Link className={classes.link} onClick={() => setIsLogIn(false)}>Here</Link>
      </Typography>
    </form>
  )
}

const SignUpWIP = ({ classes, isLogIn, setIsLogIn }) => {
  const handleSubmit = () => {
    console.log('hieperdepiep')
  }

  if(isLogIn) {
    return null
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Box display="flex" justifyContent="space-between">
        <TextField
          label="First Name"
          name="firstName"
          variant="outlined"
          margin="normal"
          required
          autoFocus
          className={classes.nameField}
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="outlined"
          margin="normal"
          required
          className={classes.nameField}
        />
      </Box>
      <TextField
        label="Username"
        name="username"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Confirm Password"
        type="password"
        name="password_confirm"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
      <Typography>
          Have an account? Log In <Link className={classes.link} onClick={() => setIsLogIn(true)}>Here</Link>
      </Typography>
    </form>
  )
}

const Login = ({ alerts }) => {
  // const dispatch = useDispatch()
  // const history = useHistory()
  const classes = useStyles()

  const [isLogIn, setIsLogIn] = useState(true)

  // const handleSubmit = event => {
  //   event.preventDefault()

  //   const userCredentials = {
  //     username: event.target.username.value,
  //     password: event.target.password.value
  //   }

  //   dispatch(login(userCredentials))
  //   history.push('/')
  // }

  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isLogIn ? 'Log In' : 'Sign Up'}
        </Typography>
        <SignUpWIP classes={classes} isLogIn={isLogIn} setIsLogIn={setIsLogIn}/>
        <LoginWIP classes={classes} isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
        {alerts && <Alerts alerts={alerts} />}
      </div>
    </Container>
  )
}

export default Login