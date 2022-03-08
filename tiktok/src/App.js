import logo from './logo.svg';
import './App.css';
import Count from './Component/Count';
import Gift from './Component/Gift';
import Course from './Component/Course';
import Todo from './Component/Todos';

function App() {
  return (
    <div style = {{padding: 32}}>
        {/* <Count /> */}
        {/* <Gift /> */}
        {/* <Course /> */}
        <Todo />
    </div>
  );
}

export default App;
