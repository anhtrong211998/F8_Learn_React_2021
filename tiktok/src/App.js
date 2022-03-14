import {useState} from 'react';
import OnlyCallBack from "./Component/OnlyCallBack";
import CallBackWithDepsNull from './Component/CallBackWithDepsNull';
import CallBackWitDeps from './Component/CallBackWithDeps';
import WithDomEvents from './Component/WithDOMEvents';
import CountDown from './Component/CountDown';
import PreviewAvatar from './Component/PreviewAvatar';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <PreviewAvatar />}
    </div>
  );
}

export default App;
