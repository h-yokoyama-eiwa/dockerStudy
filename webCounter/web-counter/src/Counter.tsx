import React from 'react';
import './Counter.css';

function Counter() {
  return (
    <div className='Counter'>
      <p className='Display'>0</p>
      <div className='ButtonArea'>
        <button className='Button' id='button_count'>カウント</button>
        <button className='Button' id='button_reset'>リセット</button>
        <button className='Button' id='button_save'>保存</button>
      </div>
    </div>
  );
}

export default Counter;
