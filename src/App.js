import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer.jsx";
import {Tutorial} from "./PathfindingVisualizer/piyushpop/piyushpop.jsx";


function App() {
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
      <div className="PopUp">
        <Tutorial />
      </div>
    </div>
    
  );
}

export default App;
