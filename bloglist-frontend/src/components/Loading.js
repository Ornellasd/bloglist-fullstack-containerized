import React from 'react'

import { CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0, 0),
  },
}))

const Loading = () => {
  const classes = useStyles()

  return (
    <div className={classes.loadingContainer}>
      <CircularProgress />
    </div>
  )
}

export default Loading