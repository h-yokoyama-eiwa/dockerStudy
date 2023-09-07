import React from 'react';
import { useState } from 'react';
import updateDb from './Backend';

function Counter() {
    const [count, setCount] = useState(0);

    function countUp () {
      updateDb();
      setCount(count + 1);
    }

    return (
      <div className='counter'>
        <p>{count}</p>
        <button type="button" onClick={countUp}>Count Up</button>
      </div>
    );
  }
  
  export default Counter;
  