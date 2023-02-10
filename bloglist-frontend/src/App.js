import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {
  Container,
  CssBaseline
} from '@material-ui/core'

import { getBlogs } from './reducers/blogReducer'
import { getUsers } from './reducers/usersReducer'
import { initializeUser } from './reducers/loginReducer'

import blogService from './services/blogs'

import BlogList from './components/BlogList'
import Blog from './components/Blog'
import Entry from './components/Entry'
import Users from './components/Users'
import Navbar from './components/Navbar'
import Alerts from './components/Alerts'

const App = () => {
  const dispatch = useDispatch()

  const alerts = useSelector(state => state.alerts)
  const blogData = useSelector(state => state.blogs)
  const loggedInUser = useSelector(state => state.login)
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getBlogs())
    dispatch(getUsers())
  }, [dispatch, loggedInUser])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      dispatch(initializeUser(user))
    }
  }, [dispatch])

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Router>
        <Navbar loggedInUser={loggedInUser} users={users} />
        <Alerts alerts={alerts} />

        <Switch>
          <Route path="/users/:id">
            {loggedInUser ? <BlogList users={users} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/users">
            {loggedInUser ? <Users users={users} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/blogs/:id">
            {loggedInUser ? <Blog loggedInUser={loggedInUser} blogData={blogData} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/blogs">
            {loggedInUser ? <BlogList blogData={blogData} users={users} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/signup">
            <Entry isLogIn={false} />
          </Route>
          <Route path="/login">
            {!loggedInUser ? <Entry isLogIn={true} /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {loggedInUser ? <Redirect to="/blogs" /> : <Entry isLogIn={true} />}
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App