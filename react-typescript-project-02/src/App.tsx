import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          <div>
            Readt + Typescript
          </div>
          <div>
            <Button backgroundColor="red" fontSize={10} padding={[10, 20, 30, 40]} />
          </div>
        </p>

      </header>
    </div>
  );
}

export default App;
