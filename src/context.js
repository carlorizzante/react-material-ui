import React, { createContext } from 'react';

// export const Context = createContext();
export const { Provider, Consumer } = createContext();

export const withContext = Component => props => (
  <Consumer>
    { value => (
      <Component { ...value } { ...props }/>
    )}
  </Consumer>
);
