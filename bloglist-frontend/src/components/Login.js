import React, { useState } from 'react'

import {
  Avatar,
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'

import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import signupService from '../services/signup'
import { login } from '../reducers/loginReducer'
import { setAlerts } from '../reducers/alertReducer'

import Alerts from './Alerts'

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
  nameField: {
    width: '48%',
  },
  link: {
    textDecoration: 'none',
    marginLeft: '4px'
  },
  centerText: {
    display: 'flex',
    justifyContent: 'center',
  }
}))

const LoginWIP = ({ classes, dispatch, history, setIsLogIn }) => {
  const handleSubmit = event => {
    event.preventDefault()

    const userCredentials = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    dispatch(login(userCredentials))
    history.push('/')
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
      <Typography className={classes.centerText}>
        Don&apos;t have an account? Sign Up<Link className={classes.link} onClick={() => setIsLogIn(false)}>here</Link>
      </Typography>
    </form>
  )
}

const SignUpWIP = ({ classes, setIsLogIn, dispatch, history }) => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    if(event.target.password.value === event.target.password_confirm.value) {
      const userCredentials = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        username: event.target.username.value,
        password: event.target.password.value
      }
      try {
        await signupService.signup(userCredentials)
        dispatch(setAlerts(['Sign Up was successful!'], 'success', 5))
        history.push('/')
      } catch(e) {
        console.log(e)
        dispatch(setAlerts(['Error with username or password'], 'error', 5))
      }
    }
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
      <Typography className={classes.centerText}>
          Have an account? Log In<Link className={classes.link} onClick={() => setIsLogIn(true)}>here</Link>
      </Typography>
    </form>
  )
}

const Login = ({ alerts }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [isLogIn, setIsLogIn] = useState(true)

  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isLogIn ? 'Log In' : 'Sign Up'}
        </Typography>
        {isLogIn && <LoginWIP classes={classes} dispatch={dispatch} history={history} setIsLogIn={setIsLogIn} />}
        {!isLogIn && <SignUpWIP classes={classes} dispatch={dispatch} history={history} setIsLogIn={setIsLogIn}/>}
        {alerts && <Alerts alerts={alerts} />}
      </div>
    </Container>
  )
}

export default Login