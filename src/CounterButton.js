import { useState } from "react";

export default function CounterButton() {
  const [getClicks, setClicks] = useState(0);

  const increment = () => setClicks(getClicks + 1);

  return (
    <>
      <p>You've clicked the button {getClicks} times</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
