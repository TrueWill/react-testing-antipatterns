import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("");

  async function handleClick() {
    setStatus("pending");
    await sleep(250);
    setStatus("done");
  }

  return (
    <>
      <h1>React Testing Library antipatterns</h1>
      <div className="my-class">Not particularly accessible</div>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      {status}
    </>
  );
}

export default App;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
