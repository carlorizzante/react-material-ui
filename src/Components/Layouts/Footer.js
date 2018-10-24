import React from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';
import { withWidth } from '@material-ui/core';

const Footer = ({ category, muscles, onSelect, width }) => {

  console.log('Footer:', width);

  const index = category
  ? muscles.findIndex(group => group === category) + 1
  : 0;

  // let index;
  // if (category) index = muscles.findIndex(group => group === category) + 1;
  // else index = 0;

  const handleSelectTab = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1])
  }

  return (
    <Paper>
      <Tabs
        value={ index }
        onChange={ handleSelectTab }
        indicatorColor="primary"
        textColor="primary"
        centered={ width !== 'xs' }
        scrollable={ width === 'xs' }
        scrollButtons="on"
      >
        <Tab label="All" />
        { muscles.map(muscle => (
          <Tab key={ muscle } label={ muscle } />
        )) }
      </Tabs>
    </Paper>
  );
}

export default withWidth()(Footer);
