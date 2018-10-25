import React, { Component } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { withWidth } from '@material-ui/core';
import { withContext } from '../../context';

class Footer extends Component {

  handleSelectTab = (e, index) => {
    const { muscles, onSelectCategory } = this.props;
    onSelectCategory(index === 0 ? '' : muscles[index - 1])
  }

  getIndex = () => {
    const { category, muscles } = this.props;
    return category
    ? muscles.findIndex(group => group === category) + 1
    : 0;
  }

  render() {
    const { muscles, width } = this.props;

    return (
      <AppBar color='primary' position='static'>
        <Tabs
          value={ this.getIndex() }
          onChange={ this.handleSelectTab }
          indicatorColor="secondary"
          textColor="secondary"
          centered={ width !== 'xs' }
          scrollable={ width === 'xs' }
          scrollButtons="on"
        >
          <Tab label="All" />
          { muscles.map(muscle => (
            <Tab key={ muscle } label={ muscle } />
          )) }
        </Tabs>
      </AppBar>
    );
  }
}

export default withContext(withWidth()(Footer));
