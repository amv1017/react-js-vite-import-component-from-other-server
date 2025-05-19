import { useState, useEffect } from "react";
import { COUNTER_PATH } from "./sources";
import ExternalComponent from "./ExternalComponent";

function App() {
  const [counter, setCounter] = useState();

  useEffect(() => {
    (async () => {
      const ext = await import(/* @vite-ignore */ COUNTER_PATH);
      setCounter(ext);
    })();
  }, []);

  if (!counter) return null;

  return (
    <div>
      <p>Counter</p>
      <ExternalComponent method={counter} />
    </div>
  );
}

export default App;
