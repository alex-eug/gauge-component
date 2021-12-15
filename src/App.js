import './App.css'
import Gauge from './components/Gauge';

function App() {
  
  return (
    <div className="App">
      <Gauge 
        radius={100}
        minRange={0}
        maxRange={220}
        currentValue={50}
        step={12}
      />
      <Gauge 
        radius={100}
        minRange={0}
        maxRange={100}
        currentValue={50}
        step={12}
      />
    </div>
  );
}

export default App;
