import React from 'react';

import { ColumnContainer, ColumnTitle } from '../styles';

interface ColumnProps {
  columnTitle: string;
}

const Column = ({ columnTitle, children }: React.PropsWithChildren<ColumnProps>): JSX.Element => (
  <div>
    <ColumnContainer>
      <ColumnTitle>
        <h2>{columnTitle}</h2>
      </ColumnTitle>
      {children}
    </ColumnContainer>
  </div>
);

export default Column;
