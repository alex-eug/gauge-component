import './App.css';
import Gauge from './components/Gauge';

function App() {
  
  return (
    <div className="App">
      <Gauge 
        radius={100}
        minRange={0}
        maxRange={100}
        currentValue={50}
        step={11}
      />
      <Gauge 
        radius={100}
        minRange={0}
        maxRange={100}
        currentValue={50}
        step={11}
      />

    </div>
  );
}

export default App;
