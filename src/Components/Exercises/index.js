import React, { Fragment } from 'react';
import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Form from './Form';

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  },
  headline: {
    textTransform: 'capitalize'
  },
  rightPane: {
    marginTop: 20
  }
}

const ExerciseDetails = ({ exercise }) => {

  const {
    description = "Select an exercise from the list on the left.",
    title = "Welcome!"
  } = exercise;

  return (
    <Fragment>
      <Typography variant="h4">
        { title }
      </Typography>
      <Typography variant="subtitle1" style={ style.rightPane }>
        { description }
      </Typography>
    </Fragment>
  );
}

export default (props) => {

  const {
    category,
    editMode,
    exercise,
    exercises,
    muscles,
    onDelete,
    onEdit,
    onSelect,
    onSubmit
  } = props;

  return (
    <Grid container spacing={ 16 }>
      <Grid item sm>
        <Paper style={ style.Paper }>
          { exercises.map(([muscles, exercises]) => (
            !category || category === muscles
            ? (
              <Fragment key={ muscles }>
                <Typography variant="h5" style={ style.headline }>
                  { muscles }
                </Typography>
                <List component="ul">
                  { exercises.map(({ id, title }) => (
                    <ListItem
                      key={ id }
                      button
                      onClick={ () => onSelect(id) }
                    >
                      <ListItemText primary={ title } />
                      <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <EditIcon onClick={ () => onEdit(id) }/>
                      </IconButton>
                      <IconButton aria-label="Delete">
                        <DeleteIcon onClick={ () => onDelete(id) }/>
                      </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>
                  )) }
                </List>
              </Fragment>
            )
            : null
          )) }
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={ style.Paper }>
          { editMode
            ? <Form
                exercise={ exercise }
                muscles={ muscles }
                onEdit={ onEdit }
                onSubmit={ onSubmit }
              />
            : <ExerciseDetails exercise={ exercise }/>
          }
        </Paper>
      </Grid>
    </Grid>
  );
}
