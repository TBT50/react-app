import React from 'react';

import { AppContainer, ColumnContainer, ColumnTitle } from './styles';

const App: React.FC = () => {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>
          <h2>ELO</h2>
        </ColumnTitle>
        <ColumnTitle>
          <h2>ELO#2</h2>
        </ColumnTitle>
      </ColumnContainer>
      <ColumnContainer>
        <ColumnTitle>
          <h2>ELO</h2>
        </ColumnTitle>
        <ColumnTitle>
          <h2>ELO#2</h2>
        </ColumnTitle>
      </ColumnContainer>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </AppContainer>
  );
};

export default App;
