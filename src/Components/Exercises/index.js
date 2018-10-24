import React, { Fragment } from 'react';
import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core';

import Form from './Form';

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    // marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  },
  headline: {
    textTransform: 'capitalize'
  },
  rightPane: {
    marginTop: 20
  }
});

const Exercises = (props) => {

  const {
    category,
    classes,
    editMode,
    exercise,
    exercises,
    muscles,
    onDelete,
    onEdit,
    onSelect,
    onSubmit
  } = props;

  const {
    id,
    description = "Select an exercise from the list on the left.",
    title = "Welcome!"
  } = exercise;

  return (
    <Grid container spacing={ 16 }>
      <Grid item xs={ 12 } sm={ 6 }>
        <Paper className={ classes.Paper }>
          { exercises.map(([muscles, exercises]) => (
            !category || category === muscles
            ? (
              <Fragment key={ muscles }>
                <Typography
                  variant="h5"
                  className={ classes.headline }
                  color='secondary'
                >
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
                      <IconButton color='secondary'>
                        <EditIcon onClick={ () => onEdit(id) }/>
                      </IconButton>
                      <IconButton color='secondary'>
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
      <Grid item xs={ 12 } sm={ 6 }>
        <Paper className={ classes.Paper }>
          <Typography
            variant="h4"
            gutterBottom
            color='secondary'
          >
            { title }
          </Typography>
          { editMode
            ? <Form
                key={ id }
                exercise={ exercise }
                muscles={ muscles }
                onEdit={ onEdit }
                onSubmit={ onSubmit }
              />
            : <Typography variant="subtitle1">
                { description }
              </Typography>
          }
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Exercises);
