import { React } from 'react'

import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'

import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  tableHeading: {
    backgroundColor: '#efefef',
    color: theme.palette.common.black
  },
  userRow: {
    textDecoration: 'none'
  }
}))

const Users = ({ users }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleRowClick = (e, user) => {
    e.preventDefault()
    if(user.blogs.length > 0) {
      history.push(`/users/${user.id}`)
    }
  }

  return (
    <div>
      <Typography align="center" component="h1" variant="h5">
        Users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeading}>Username</TableCell>
              <TableCell className={classes.tableHeading} align="right">Blogs Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user =>
              <TableRow
                className={classes.userRow}
                style={ user.blogs.length > 0 ? { cursor: 'pointer' } : {} }
                onClick={(e) => handleRowClick(e, user)}
                hover={user.blogs.length > 0}
                key={user.id}
              >
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell align="right">{user.blogs.length}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Users