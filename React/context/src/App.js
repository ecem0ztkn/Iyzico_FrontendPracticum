import ThemeContext from './context/ThemeContext';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Button/>
    </ThemeContext.Provider>
  );
}

export default App;
