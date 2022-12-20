import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  BrowserRouter as Router,
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
// import Signup from './components/Signup'
import Users from './components/Users'
import Navbar from './components/Navbar'
import Alerts from './components/Alerts'

const App = () => {
  const dispatch = useDispatch()

  const alerts = useSelector(state => state.alerts)
  const blogs = useSelector(state => state.blogs)
  const loggedInUser = useSelector(state => state.login)
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getBlogs())
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      dispatch(initializeUser(user))
    }
  }, [dispatch])

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Router>
        <div>
          <Navbar currentUser={loggedInUser} blogs={blogs} users={users} />
          <Alerts alerts={alerts} />
        </div>

        <Switch>
          <Route path="/users/:id">
            {loggedInUser ? <BlogList users={users} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/users">
            {loggedInUser ? <Users users={users} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/blogs/:id">
            {loggedInUser ? <Blog loggedInUser={loggedInUser} blogs={blogs} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/blogs">
            {loggedInUser ? <BlogList allBlogs={blogs} users={users} /> : <Redirect to="/login" />}
          </Route>
          {/* <Route path="/signup">
            <Signup />
          </Route> */}
          <Route path="/">
            {loggedInUser ? <Redirect to="/blogs" /> : <Entry alerts={alerts} />}
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App