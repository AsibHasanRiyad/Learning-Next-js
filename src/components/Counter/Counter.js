"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Value: {count}
      <br />
      <button onClick={() => setCount(count + 1)} className="btn bg-red-400">
        Increase
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="btn btn-primary bg-gray-600"
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
