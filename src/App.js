import './App.css';
import ListOfMessages from './Components/ListOfMessages';
import ControlPanel from './Components/ControlPanel';

function App() {
  return (
    <div className = "App-wrapper">
      <ListOfMessages />
      <ControlPanel />
    </div>
  );
}

export default App;
