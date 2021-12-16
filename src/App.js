import './App.css'
import Gauge from './components/Gauge';

function App() {
  
  return (
    <div className="App">
      <Gauge 
        minRange={0}
        maxRange={220}
        currentValue={50}
        step={12}
      />
      <Gauge 
        minRange={0}
        maxRange={100}
        currentValue={50}
        step={11}
      />
    </div>
  );
}

export default App;
