import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('State güncellendi');
  });

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}> Click</button>
    </div>
  );
}

export default App;
