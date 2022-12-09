import React from 'react'
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

// import Alerts from './Alerts'

import { useDispatch } from 'react-redux'
// import { Link, useHistory } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom'

// import { login } from '../reducers/loginReducer'
// import { signup } from '../reducers/signupReducer'
import { setAlerts } from '../reducers/alertReducer'

import signupService from '../services/signup'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  nameField: {
    width: '48%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: 'none'
  }
}))

const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()

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
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
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
              autoFocus
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
            autoFocus
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="password_confirm"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
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
        </form>
        <Typography>
          Have an account? Log In <Link to="/login" className={classes.link}>Here</Link>
        </Typography>
        {/* {alerts && <Alerts alerts={alerts} />} */}
      </div>
    </Container>
  )
}

export default Signup