import React from 'react';

import { AppContainer } from './styles';

import Column from './components/Column';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <AppContainer>
      <Column columnTitle="Column 1">
        <Card text="Card 1" />
        <Card text="Card 2" />
      </Column>
      <Column columnTitle="Column 2">
        <Card text="Card 1" />
        <Card text="Card 2" />
      </Column>
    </AppContainer>
  );
};

export default App;
