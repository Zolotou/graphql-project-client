import './App.css';
import ListOfMessages from './Components/ListOfMessages';
import ControlPanel from './Components/ControlPanel';
import { CheckRender } from './Components/CheckRender';

function App() {
  return (
    <div className = "App-wrapper">
      <CheckRender />
      <ListOfMessages />
      <ControlPanel />
    </div>
  );
}

export default App;
