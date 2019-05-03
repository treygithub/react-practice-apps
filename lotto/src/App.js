import React from 'react';
import './App.css';
import Lotto from './Lotto';

function App() {
  return (
    <div className="App">
      <Lotto/>
      <Lotto title={'Mini Lotto'} maxNum={20} maxBalls={4}/>
    </div>5g5g5g
  );
}

export default App;
