import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={()=> setCount(prev => prev +1 )}>Counter</button>
  )
};

export default Counter;
