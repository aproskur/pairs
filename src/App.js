import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <GameBoard size={4} />
    </div>
  );
}

export default App;
