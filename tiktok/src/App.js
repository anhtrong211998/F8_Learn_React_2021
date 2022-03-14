import {useState} from 'react';
import OnlyCallBack from "./Component/OnlyCallBack";
import CallBackWithDepsNull from './Component/CallBackWithDepsNull';
import CallBackWitDeps from './Component/CallBackWithDeps';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <CallBackWitDeps />}
    </div>
  );
}

export default App;
