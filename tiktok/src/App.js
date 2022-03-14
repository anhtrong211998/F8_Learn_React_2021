import {useState} from 'react';
import OnlyCallBack from "./Component/OnlyCallBack";
import CallBackWithDepsNull from './Component/CallBackWithDepsNull';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <CallBackWithDepsNull />}
    </div>
  );
}

export default App;
