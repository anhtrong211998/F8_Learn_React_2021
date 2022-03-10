import {useState} from 'react';
import OnlyCallBack from "./Component/OnlyCallBack";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <OnlyCallBack />}
    </div>
  );
}

export default App;
