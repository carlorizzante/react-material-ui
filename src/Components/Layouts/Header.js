import React from 'react';
// import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import Create from '../Exercises/Create';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default ({ onCreate, muscles }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit" style={ styles.grow }>
        Exercise Database
      </Typography>
      <Create
        muscles={ muscles }
        onCreate={ onCreate }
      />
    </Toolbar>
  </AppBar>
)
