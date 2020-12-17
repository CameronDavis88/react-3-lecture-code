import Lifecycle from './Components/Lifecycle';
import ClassComponent from './Components/ClassComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lifecycle />
        <ClassComponent greeting='Good Morning'/>
      </header>
    </div>
  );
}

export default App;
