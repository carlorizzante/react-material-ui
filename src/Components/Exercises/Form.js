import React, { Component, Fragment } from 'react';
import { Button, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {},
  TextField: {},
  formControl: {
    // margin: theme.spacing.unit,
    // minWidth: '100%'
  },
  selectEmpty: {
    // marginTop: theme.spacing.unit * 2,
  },
});

class Form extends Component {

  state = this.getInitialState()

  getInitialState() {
    const { exercise } = this.props;
    const initialState = {
      title: '',
      muscles: '',
      description: ''
    }
    return exercise ? exercise : initialState;
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('fired');
  //   const { exercise } = nextProps;
  //   if (exercise) this.setState({ ...exercise });
  // }

  // static getDerivedStateFromProps(nextProps) {
  //   console.log('fired');
  //   return nextProps.exercise || null;
  // }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit = () => {
    // TODO: add validation
    // const { id, description, muscles, title } = this.state;
    const { title } = this.state;
    const { onSubmit } = this.props;
    onSubmit({
      id: title.toLocaleLowerCase().replace(/ /g, '-'),
      // id, description, muscles, title
      ...this.state
    });
    this.setState({ open: false });
  }

  render() {
    const { description, muscles, title } = this.state;
    const { classes, exercise, muscles: categories } = this.props;

    return (
      <form>
        <TextField
          autoFocus
          id="title"
          label="Title"
          className={ classes.textField }
          value={ title }
          onChange={ this.handleChange('title') }
          margin="normal"
          fullWidth
        />
        <FormControl
          className={ classes.formControl }
          fullWidth
        >
          <InputLabel htmlFor="age-native-simple">Muscles</InputLabel>
          <Select
            native
            value={ muscles }
            onChange={ this.handleChange('muscles') }
          >
            <option value=""/>
            { categories.map((category) => (
              <option
                key={ category }
                value={ category }
              >{ category }</option>
            )) }
          </Select>
        </FormControl>
        <TextField
          id="description"
          label="Description"
          className={ classes.textField }
          value={ description }
          onChange={ this.handleChange('description') }
          margin="normal"
          fullWidth
          multiline
          rows="4"
        />
        <Fragment>
          <Button
            onClick={ this.handleSubmit }
            color="primary"
            variant="contained"
            disabled={ !title || !muscles }
          >
            { exercise ? 'Save' : 'Create' }
          </Button>
        </Fragment>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
