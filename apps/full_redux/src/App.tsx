import { FC, useState } from "react";

const App:FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
