import React from 'react';
import Todos from './pages/Todos';
import CounterHooks from './pages/CounterHooks';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Todos/>
      <CounterHooks/>
    </div>
  );
}

export default App;
