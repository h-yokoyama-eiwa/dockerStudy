import React from 'react';
import './Counter.css';

function Counter() {
  return (
    <div className='Counter'>
      <p className='Display'>0</p>
      <div className='ButtonArea'>
        <button className='CountButton'>カウント</button>
        <button className='ResetButton'>リセット</button>
        <button className='SaveButton'>保存</button>
      </div>
    </div>
  );
}

export default Counter;
