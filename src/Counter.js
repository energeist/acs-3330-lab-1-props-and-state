import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <small>{props.label}</small>
      <h1>{props.value}</h1>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}

export default Counter;

