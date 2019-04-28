import React from 'react';
import './App.css';
import Lotto from './Lotto';

function App() {
  return (
    <div className="App">
      <Lotto/>
      <Lotto title={'Mini Lotto'} maxNum={20} maxBalls={4}/>
    </div>
  );
}

export default App;
