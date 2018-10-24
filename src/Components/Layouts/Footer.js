import React from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';

export default ({ category, muscles, onSelect }) => {

  const index = category
  ? muscles.findIndex(group => group === category) + 1
  : 0;

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
        centered
      >
        <Tab label="All" />
        { muscles.map(muscle => (
          <Tab key={ muscle } label={ muscle } />
        )) }
      </Tabs>
    </Paper>
  );
}
