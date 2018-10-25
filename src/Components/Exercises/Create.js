import React, { Component, Fragment } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
// import { withStyles } from '@material-ui/core';

import { withContext } from '../../context';

import Form from './Form';

class Create extends Component {

  state = {
    open: false
  }

  handleToggleDialog = () => {
    this.setState({ open: !this.state.open });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleSubmit = (exercise) => {
    this.handleToggleDialog();
    return this.props.onCreate(exercise);
  }

  render() {
    const { open } = this.state;
    const { muscles } = this.props;

    return (
      <Fragment>
        <Button
          variant="fab"
          color="secondary"
          onClick={ this.handleToggleDialog }
          mini
        >
          <AddIcon/>
        </Button>
        <Dialog
          open={ open }
          onClose={ this.handleToggleDialog }
          maxWidth="sm"
        >
          <DialogTitle>
            New exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill out the form to create a new exercise.
            </DialogContentText>
            <Form
              muscles={ muscles }
              onSubmit={ this.handleSubmit }
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withContext(Create);
