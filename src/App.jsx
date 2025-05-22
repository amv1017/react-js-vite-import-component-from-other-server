import { useState, useEffect } from "react";
import { COUNTER_PATH, COMPONENT_PATHS } from "./sources";
import ExternalComponent from "./ExternalComponent";

function App() {
  const [count, setCount] = useState(0);
  const [counterMethod, setCounterMethod] = useState(false);
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    (async () => {
      const ext = await import(/* @vite-ignore */ COUNTER_PATH);
      setCounterMethod(ext);

      let ms = [];
      for (let cmp of COMPONENT_PATHS) {
        const { id, path } = cmp;
        const method = await import(/* @vite-ignore */ path);
        ms.push({ id, method });
      }
      setMethods(ms);
    })();
  }, []);

  if (!counterMethod || !methods.length) return null;

  return (
    <div>
      <p>Counter</p>
      <ExternalComponent
        method={counterMethod}
        count={count}
        setCount={setCount}
        step={15}
      />
      <br />
      <ul>
        {methods.map(({ id, method }) => (
          <ExternalComponent key={id} method={method} value={count} />
        ))}
      </ul>
    </div>
  );
}

export default App;
