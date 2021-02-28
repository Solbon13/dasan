import './App.css';

import React from "react";
import { useState, useEffect } from "react";

const Timer = (timeoutSec) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer =
      counter < timeoutSec && setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <div>timer: {counter}</div>
      <p className='container'
        style={{ position: 'relative' }}>
        <img className='main' src="./dasan/images/777.jpg" alt="Logo"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '500px'
          }} />
        <img className='second' src="./dasan/images/2.png" alt="Logo"
          style={{
            position: 'absolute',
            left: 270 + 'px',
            top: 360 + 'px',
            width: 3 + counter + 'px',
            zIndex: 2,
            transform: 'scale(12)'
          }} />
      </p>
    </>)
};

function App() {

  return (
    <div>
      <h2>{Timer(30)}</h2>

    </div>
  );
}

export default App;
