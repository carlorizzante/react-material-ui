import React, { Component, Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store.js';

// import './App.css';

import { indigo, blue, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    // secondary: amber
    secondary: {
      main: blue[400],
      light: amber[200],
      dark: amber[600]
    },
    type: 'dark'
  }
});

class App extends Component {

  state = {
    editMode: false,
    exercise: {},
    exercises,
    category: ''
  }

  getExercisesByMuscles() {
    const initialExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {});

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise];
        return exercises;
      }, initialExercises)
    );
  }

  handleSelectCategory = category => {
    this.setState({ category })
  }

  handleSelectExercise = id => {
    this.setState((prevState) => ({
      editMode: false,
      exercise: prevState.exercises.find((ex) => ex.id === id)
    }));
  }

  handleCreateExercise = (exercise) => {
    this.setState((prevState) => ({
      exercises: [
        ...prevState.exercises,
        exercise
      ],
      exercise
    }));
  }

  handleDeleteExercise = (id) => {
    this.setState((prevState) => ({
      editMode: prevState.exercise.id === id ? false : prevState.editMode,
      exercise: prevState.exercise.id === id ? {} : prevState.exercise,
      exercises: prevState.exercises.filter((exercise) => exercise.id !== id)
    }));
  }

  handleEditExercise = (id) => {
    this.setState({
      editMode: true,
      exercise: this.state.exercises.find((exercise) => exercise.id === id)
    });
  }

  handleSaveExercise = (exercise) => {
    this.setState((prevState) => ({
      editMode: false,
      exercises: [
        ...prevState.exercises.filter((ex) => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }));
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, editMode, exercise } = this.state;

    return (
      <MuiThemeProvider theme={ theme }>
        <Fragment>
          <CssBaseline/>
          <Header
            onCreate={ this.handleCreateExercise }
            muscles={ muscles }
          />

          <Exercises
            category={ category }
            editMode={ editMode }
            exercise={ exercise }
            exercises={ exercises }
            muscles={ muscles }
            onDelete={ this.handleDeleteExercise }
            onEdit={ this.handleEditExercise }
            onSelect={ this.handleSelectExercise }
            onSubmit={ this.handleSaveExercise }
          />

          <Footer
            category={ category }
            muscles={ muscles }
            onSelect={ this.handleSelectCategory }
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
