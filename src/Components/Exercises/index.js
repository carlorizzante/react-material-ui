import React, { Fragment } from 'react';
import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core';
import { withContext } from '../../context';

import Form from './Form';

const styles = theme => ({
  root: {
    padding: 8,
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  panel: {
    [theme.breakpoints.down('sm')]: {
      // height: '50%',
      height: 'auto',
      // flex: 1
      // backgroundColor: 'teal'
    }
  },
  Paper: {
    // padding: 16,
    padding: theme.spacing.unit * 2,
    // marginTop: 5,
    // marginBottom: 10,
    height: '100%',
    // minHeight: '200px',
    overflowY: 'auto'
  },
  headline: {
    textTransform: 'capitalize'
  },
  rightPane: {
    // marginTop: 20
  }
});

const Exercises = (props) => {

  const {
    category,
    classes,
    editMode,
    exercise,
    exercisesByMuscles,
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
    <Grid container spacing={ 8 } className={ classes.root }>
      <Grid item xs={ 12 } sm={ 6 } className={ classes.panel }>
        <Paper className={ classes.Paper }>
          { exercisesByMuscles.map(([muscles, exercises]) => (
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
      <Grid item xs={ 12 } sm={ 6 } className={ classes.panel }>
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

export default withContext(withStyles(styles)(Exercises));
