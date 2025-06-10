import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Khởi tạo count = 0

  const increment = () => {
    setCount(count + 1); // Cập nhật state
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Bạn đã click {count} lần.</p>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
    </div>
  );
}

export default Counter;