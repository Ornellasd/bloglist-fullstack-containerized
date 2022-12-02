import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import {
  Avatar,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'

import { Link } from 'react-router-dom'

// import Alerts from './Alerts'

// import { useDispatch } from 'react-redux'
// import { Link, useHistory } from 'react-router-dom'

// import { login } from '../reducers/loginReducer'

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: 'none'
  }
}))

const Signup = () => {
  // const dispatch = useDispatch()
  // const history = useHistory()
  const classes = useStyles()

  const handleSubmit = event => {
    event.preventDefault()
    console.log('handling submit....')

    // const userCredentials = {
    //   username: event.target.username.value,
    //   password: event.target.password.value
    // }

    // dispatch(login(userCredentials))
    // history.push('/')
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
        {/* {alerts && <Alerts alerts={alerts} />} */}
        <Typography>
          Don&apos;t have an account? Sign Up <Link to="/signup" className={classes.link}>Here</Link>
        </Typography>
      </div>
    </Container>
  )
}

export default Signup