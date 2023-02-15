import React, { useState } from 'react';
import './App.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if(count <10){
    setCount(prevCount => prevCount + 1);
  }
  };

  const handleDecrement = () => {
    if(count >0){
    setCount(prevCount => prevCount - 1);
  }
  };

  let color = 'green';
  if (count >= 5 && count <= 9) {
    color = 'blue';
  } else if (count === 10) {
    color = 'red';
  }

  return (
    <div>
      <h1 className='mainhead'>DeX Counter</h1>
      
    
      <h1 className='countNum' style={{ color: color }}>{count}</h1>
      <div className='middle'>
      <button className='btn btn-outline-success btn-lg' onClick={handleIncrement}>Increment</button>
      <button className='btn btn-outline-danger btn-lg' onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterApp;
