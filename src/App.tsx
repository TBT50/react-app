import React from 'react';

import { AppContainer, ColumnContainer, ColumnTitle, CardContainer } from './styles';

const App: React.FC = () => {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>
          <h2>TEST</h2>
        </ColumnTitle>
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </ColumnContainer>
      <ColumnContainer>
        <ColumnTitle>
          <h2>TEST#2</h2>
        </ColumnTitle>
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </ColumnContainer>
    </AppContainer>
  );
};

export default App;
