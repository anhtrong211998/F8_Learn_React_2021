import {useState} from 'react';
import OnlyCallBack from "./Component/OnlyCallBack";
import CallBackWithDepsNull from './Component/CallBackWithDepsNull';
import CallBackWitDeps from './Component/CallBackWithDeps';
import WithDomEvents from './Component/WithDOMEvents';
import CountDown from './Component/CountDown';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <CountDown />}
    </div>
  );
}

export default App;
