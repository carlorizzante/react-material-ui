import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
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
    <AppBar color='primary' position='static'>
      <Tabs
        value={ index }
        onChange={ handleSelectTab }
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

export default withWidth()(Footer);
