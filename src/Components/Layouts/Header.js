import React from 'react';
// import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core';
import Create from '../Exercises/Create';

const styles = theme => ({
  root: {},
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const Header = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit" className={ classes.grow }>
        Exercise Database
      </Typography>
      <Create/>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header);
