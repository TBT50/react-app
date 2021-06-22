import React from 'react';

const btnStyles = {
  color: 'red',
  backgroundColor: 'green',
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" style={btnStyles}>
          Click me bro
        </button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
