import {useState} from 'react';
import OnlyCallBack from "./Component/OnlyCallBack";
import CallBackWithDepsNull from './Component/CallBackWithDepsNull';
import CallBackWitDeps from './Component/CallBackWithDeps';
import WithDomEvents from './Component/WithDOMEvents';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <WithDomEvents />}
    </div>
  );
}

export default App;
