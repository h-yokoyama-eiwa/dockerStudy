import React from 'react';
// import './App.css';

function Counter() {
  return (
    <div className="Counter">
      <p className="Display">
        0
      </p>
      <button className="Button">カウント</button>
      <button className="Button">リセット</button>
      <button className="Button">保存</button>
    </div>
  );
}

export default Counter;
