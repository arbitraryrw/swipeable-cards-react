import './App.css';
import Deck from "./components/Deck";



function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app-header">
          <h1> Swipeable Cards Demo</h1>
        </div>
        <Deck/>
      </div>
    </div>    
  )
}

export default App;
