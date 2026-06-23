import {useState} from 'react';

const Exe18 = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div>
      <h1>Exe18: State as a Snapshot Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleSnapshot}>Take Snapshot</button>
      <button onClick={handleRestore}>Restore Snapshot</button>
    </div>
  );
};

export default Exe18;
