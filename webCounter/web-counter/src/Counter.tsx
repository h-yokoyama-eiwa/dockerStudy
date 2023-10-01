import React from 'react';
import './Counter.css';

function Counter() {
  return (
    <div className="Counter">
      <p className='Display'>0</p>
      <div className='ButtonArea'>
        <button className="Button">カウント</button>
        <button className="Button">リセット</button>
        <button className="Button">保存</button>
      </div>
    </div>
  );
}

export default Counter;
